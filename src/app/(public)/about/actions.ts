"use server";

import dbConnect from "@/lib/mongodb";
import Registration from "@/models/Registration";

export async function getPublicGrowthStats() {
  await dbConnect();

  // Aggregation for Registration History (Last 30 Days for public view)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 29); // Start 29 days ago + today = 30 days
  thirtyDaysAgo.setHours(0, 0, 0, 0);

  const registrationAggregation = await Registration.aggregate([
    {
      $match: {
        createdAt: { $gte: thirtyDaysAgo },
      },
    },
    {
      $project: {
        // Use IST timezone (+05:30) for accurate daily grouping
        year: { $year: { date: "$createdAt", timezone: "+05:30" } },
        month: { $month: { date: "$createdAt", timezone: "+05:30" } },
        day: { $dayOfMonth: { date: "$createdAt", timezone: "+05:30" } },
      },
    },
    {
      $group: {
        _id: {
          year: "$year",
          month: "$month",
          day: "$day",
        },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 },
    },
  ]);

  // Format for chart
  const growthData = registrationAggregation.map((item) => {
    const date = new Date(item._id.year, item._id.month - 1, item._id.day);
    return {
      date: date.toLocaleString("default", { month: "short", day: "numeric" }),
      count: item.count,
      fullDate: date.getTime(), // for sorting
    };
  });

  // Fill gaps for the last 30 days
  for (let i = 0; i < 30; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const label = d.toLocaleString("default", {
      month: "short",
      day: "numeric",
    });
    // Check if this date exists in our data
    // We need to match somewhat loosely because of potential time differences?
    // Actually exact string match on the label should work if generated identically
    if (!growthData.find((r: any) => r.date === label)) {
      growthData.push({
        date: label,
        count: 0,
        fullDate: new Date(
          d.getFullYear(),
          d.getMonth(),
          d.getDate(),
        ).getTime(),
      });
    }
  }

  // Sort by date
  growthData.sort((a: any, b: any) => a.fullDate - b.fullDate);

  // Total count for "Impact" stats
  const totalStudents = await Registration.countDocuments();

  return {
    growthData,
    totalStudents,
  };
}
