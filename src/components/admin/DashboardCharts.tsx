"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import type { DashboardStats } from "@/types/admin";

import { useState, useEffect } from "react";

interface DashboardChartsProps {
  stats: DashboardStats;
}

export default function DashboardCharts({ stats }: DashboardChartsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // BACE Brand Colors
  const colors = {
    saffron: "#ECA400", // Main Brand Color
    gold: "#FFC857", // Secondary
    forest: "#2E5948", // Success/Nature
    charcoal: "#3D405B", // Dark/Text
    terraCotta: "#E07A5F", // Accent
    beige: "#F4F1DE", // Background
  };

  if (!mounted) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Registrations Trend Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-beige-200 p-6">
        <div className="mb-6">
          <h3 className="text-lg font-serif font-bold text-charcoal">
            Registration Growth
          </h3>
          <p className="text-sm text-charcoal-light">
            New student registrations over the last 6 months
          </p>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={stats.registrationHistory}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="colorRegistrations"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={colors.saffron}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={colors.saffron}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: colors.charcoal, fontSize: 12 }}
                tickMargin={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: colors.charcoal, fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
                itemStyle={{ color: colors.charcoal, fontWeight: 600 }}
                cursor={{ stroke: colors.saffron, strokeWidth: 1 }}
              />
              <Area
                type="monotone"
                dataKey="count"
                stroke={colors.saffron}
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorRegistrations)"
                name="Registrations"
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Reviews Distribution Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-beige-200 p-6">
        <div className="mb-6">
          <h3 className="text-lg font-serif font-bold text-charcoal">
            Review Status
          </h3>
          <p className="text-sm text-charcoal-light">
            Distribution of review moderation status
          </p>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={stats.reviewStats}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              barSize={60}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="status"
                axisLine={false}
                tickLine={false}
                tick={{ fill: colors.charcoal, fontSize: 13, fontWeight: 500 }}
                tickMargin={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: colors.charcoal, fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
                itemStyle={{ color: colors.charcoal, fontWeight: 600 }}
              />
              <Bar
                dataKey="count"
                name="Reviews"
                radius={[6, 6, 0, 0]}
                animationDuration={1500}
              >
                {stats.reviewStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
