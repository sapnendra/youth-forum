import { getDashboardStats } from "../actions";
import Link from "next/link";
import DashboardCharts from "@/components/admin/DashboardCharts";

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  const statCards = [
    {
      title: "Total Registrations",
      value: stats.totalRegistrations,
      subtitle: `${stats.pendingRegistrations} pending`,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      link: "/admin/registrations",
      color: "bg-saffron text-white",
      borderColor: "border-saffron/20 hover:border-saffron",
    },
    {
      title: "Pending Reviews",
      value: stats.pendingReviews,
      subtitle: `${stats.approvedReviews} approved`,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      link: "/admin/reviews",
      color: "bg-gold text-white",
      borderColor: "border-gold/20 hover:border-gold",
    },
    {
      title: "Total Reviews",
      value: stats.totalReviews,
      subtitle: `${stats.rejectedReviews} rejected`,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
      link: "/admin/reviews",
      color: "bg-charcoal text-white",
      borderColor: "border-charcoal/20 hover:border-charcoal",
    },
    {
      title: "Contacted",
      value: stats.contactedRegistrations,
      subtitle: `of ${stats.totalRegistrations} total`,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      link: "/admin/registrations?contacted=true",
      color: "bg-forest text-white",
      borderColor: "border-forest/20 hover:border-forest",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">
          Admin Dashboard
        </h1>
        <p className="text-charcoal-light">
          Overview of registrations and reviews
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {statCards.map((stat, index) => (
          <Link
            key={index}
            href={stat.link}
            className={`group block bg-white rounded-xl shadow-sm hover:shadow-lg border p-6 transition transform hover:-translate-y-1 ${stat.borderColor}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color} shadow-sm`}>
                {stat.icon}
              </div>
            </div>
            <h3 className="text-sm font-medium text-charcoal-light mb-1">
              {stat.title}
            </h3>
            <p className="text-3xl font-bold text-charcoal mb-2">
              {stat.value}
            </p>
            <p className="text-sm text-charcoal-light/80">{stat.subtitle}</p>
          </Link>
        ))}
      </div>

      {/* Graphs Section */}
      <DashboardCharts stats={stats} />

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-beige-200 p-6">
        <h2 className="text-xl font-serif font-bold text-charcoal mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/registrations"
            className="flex items-center gap-3 p-4 bg-beige-soft hover:bg-beige rounded-lg border border-beige-200 transition group"
          >
            <div className="p-2 bg-saffron text-white rounded-lg group-hover:scale-110 transition shadow-sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-charcoal">View Registrations</p>
              <p className="text-sm text-charcoal-light">
                Manage all registrations
              </p>
            </div>
          </Link>

          <Link
            href="/admin/reviews?approved=false"
            className="flex items-center gap-3 p-4 bg-beige-soft hover:bg-beige rounded-lg border border-beige-200 transition group"
          >
            <div className="p-2 bg-gold text-white rounded-lg group-hover:scale-110 transition shadow-sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-charcoal">Moderate Reviews</p>
              <p className="text-sm text-charcoal-light">
                {stats.pendingReviews} pending approval
              </p>
            </div>
          </Link>

          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 p-4 bg-beige-soft hover:bg-beige rounded-lg border border-beige-200 transition group"
          >
            <div className="p-2 bg-forest text-white rounded-lg group-hover:scale-110 transition shadow-sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-charcoal">View Public Site</p>
              <p className="text-sm text-charcoal-light">Open in new tab</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
