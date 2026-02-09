"use client";

import { useState, useEffect } from "react";
import {
  getRegistrations,
  updateRegistration,
  deleteRegistration,
} from "../actions";
import type { Registration } from "@/types/admin";

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState<"all" | "pending" | "contacted">("all");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [note, setNote] = useState("");

  useEffect(() => {
    loadRegistrations();
  }, [page, filter, search]);

  const loadRegistrations = async () => {
    setLoading(true);
    const contacted =
      filter === "all" ? undefined : filter === "contacted" ? true : false;

    const result = await getRegistrations({
      page,
      limit: 20,
      contacted,
      search: search || undefined,
    });

    if (result.success && result.data) {
      setRegistrations(result.data);
      setTotalPages(result.pagination?.totalPages || 1);
    }
    setLoading(false);
  };

  const handleMarkContacted = async (
    id: string,
    currentlyContacted: boolean,
  ) => {
    const result = await updateRegistration(id, {
      contacted: !currentlyContacted,
    });

    if (result.success) {
      loadRegistrations();
    }
  };

  const handleSaveNote = async (id: string) => {
    const result = await updateRegistration(id, {
      internalNote: note,
    });

    if (result.success) {
      setSelectedId(null);
      setNote("");
      loadRegistrations();
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this registration?")) {
      const result = await deleteRegistration(id);
      if (result.success) {
        loadRegistrations();
      }
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-saffron-dark mb-2">
          Registrations Management
        </h1>
        <p className="text-charcoal-light">
          View and manage student registrations
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by name, email, or college..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all"
            />
          </div>
          <div className="flex gap-2">
            {(["all", "pending", "contacted"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === f
                    ? "bg-saffron text-white shadow-md shadow-orange-200"
                    : "bg-beige text-charcoal hover:bg-orange-50"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-saffron"></div>
          </div>
        ) : registrations.length === 0 ? (
          <div className="text-center p-12">
            <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-saffron-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <p className="text-charcoal-light">No registrations found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-beige border-b border-orange-100">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">
                    student
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-50">
                {registrations.map((reg) => (
                  <tr
                    key={reg._id}
                    className="hover:bg-beige-soft transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-saffron/10 flex items-center justify-center text-saffron-dark font-bold text-lg mr-3">
                          {reg.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-semibold text-charcoal">
                            {reg.name}
                          </div>
                          <div className="text-xs text-charcoal-light">
                            Joined{" "}
                            {new Date(reg.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center text-sm text-charcoal-light">
                          <svg
                            className="w-4 h-4 mr-2 text-saffron-muted"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          {reg.email}
                        </div>
                        <div className="flex items-center text-sm text-charcoal-light">
                          <svg
                            className="w-4 h-4 mr-2 text-saffron-muted"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          {reg.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-charcoal">
                        {reg.college}
                      </div>
                      <div className="text-xs text-charcoal-light mb-2">
                        {reg.currentCity}
                      </div>
                      {reg.message && (
                        <div className="text-xs italic text-gray-500 bg-gray-50 p-2 rounded border border-gray-100 max-w-xs">
                          "{reg.message}"
                        </div>
                      )}
                      {reg.internalNote && (
                        <div className="mt-2 text-xs text-blue-800 bg-blue-50 px-2 py-1 rounded inline-block border border-blue-100">
                          Note: {reg.internalNote}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {reg.contacted ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-forest/10 text-forest">
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          Contacted
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-saffron/10 text-saffron-dark">
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleMarkContacted(reg._id, reg.contacted)
                          }
                          title={
                            reg.contacted
                              ? "Mark as Pending"
                              : "Mark as Contacted"
                          }
                          className={`flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            reg.contacted
                              ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                              : "bg-forest text-white hover:bg-forest-light shadow-sm shadow-green-100"
                          }`}
                        >
                          {reg.contacted ? (
                            <>
                              <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                              Undo
                            </>
                          ) : (
                            <>
                              <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Mark Contacted
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => {
                            setSelectedId(reg._id);
                            setNote(reg.internalNote || "");
                          }}
                          title="Add Internal Note"
                          className="p-1.5 text-charcoal-light hover:text-saffron transition-colors rounded-lg hover:bg-orange-50"
                        >
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
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>

                        <button
                          onClick={() => handleDelete(reg._id)}
                          title="Delete Registration"
                          className="p-1.5 text-red-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                        >
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-orange-100 bg-beige">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 text-sm font-medium text-charcoal bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>
            <span className="text-sm text-charcoal-light font-medium">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 text-sm font-medium text-charcoal bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Note Modal */}
      {selectedId && (
        <div className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 border-t-4 border-saffron">
            <h3 className="text-lg font-serif font-bold text-charcoal mb-4">
              Internal Note
            </h3>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add private note about this registration..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron mb-4 text-charcoal"
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  setSelectedId(null);
                  setNote("");
                }}
                className="px-4 py-2 text-sm font-medium text-charcoal-light bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveNote(selectedId)}
                className="px-4 py-2 text-sm font-medium text-white bg-saffron hover:bg-saffron-dark rounded-lg transition shadow-md shadow-orange-200"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
