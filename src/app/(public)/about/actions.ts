"use server";

import dbConnect from "@/lib/mongodb";
import Registration from "@/models/Registration";

export async function getPublicGrowthStats() {
  await dbConnect();

  // Aggregation for Registration History (Last 12 Months for public view)
  const oneYearAgo = new Date();
  oneYearAgo.setMonth(oneYearAgo.getMonth() - 11);
  oneYearAgo.setDate(1); // Start of month

  const registrationAggregation = await Registration.aggregate([
    {
      $match: {
        createdAt: { $gte: oneYearAgo },
      },
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { "id.year": 1, "id.month": 1 },
    },
  ]);

  // Format for chart
  const growthData = registrationAggregation.map((item) => {
    const date = new Date(item._id.year, item._id.month - 1);
    return {
      date: date.toLocaleString("default", { month: "short", year: "2-digit" }),
      count: item.count,
      fullDate: date.getTime(), // for sorting
    };
  });

  // Fill gaps
  for (let i = 0; i < 12; i++) {
    const d = new Date();
    d.setMonth(d.getMonth() - i);
    const label = d.toLocaleString("default", {
      month: "short",
      year: "2-digit",
    });
    if (!growthData.find((r: any) => r.date === label)) {
      growthData.push({
        date: label,
        count: 0,
        fullDate: new Date(d.getFullYear(), d.getMonth()).getTime(),
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
