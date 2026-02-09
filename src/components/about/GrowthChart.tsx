"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";

interface GrowthChartProps {
  data: {
    date: string;
    count: number;
  }[];
}

export default function GrowthChart({ data }: GrowthChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const colors = {
    saffron: "#ECA400",
    charcoal: "#3D405B",
    white: "#FFFFFF",
  };

  if (!mounted)
    return (
      <div className="h-[400px] w-full bg-white/5 animate-pulse rounded-xl" />
    );

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.saffron} stopOpacity={0.3} />
              <stop offset="95%" stopColor={colors.saffron} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="rgba(255,255,255,0.1)"
          />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(61, 64, 91, 0.9)",
              backdropFilter: "blur(8px)",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              color: "#fff",
            }}
            itemStyle={{ color: colors.saffron, fontWeight: 600 }}
            labelStyle={{ color: "rgba(255,255,255,0.7)", marginBottom: "4px" }}
            cursor={{
              stroke: colors.saffron,
              strokeWidth: 1,
              strokeDasharray: "5 5",
            }}
          />
          <Area
            type="monotone"
            dataKey="count"
            stroke={colors.saffron}
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorGrowth)"
            name="New Students"
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
