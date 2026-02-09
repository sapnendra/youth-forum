import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

/**
 * Get the current session server-side
 */
export async function getSession() {
  return await getServerSession(authOptions);
}

/**
 * Require admin authentication for server actions
 * Throws error if not authenticated or not admin role
 */
export async function requireAdmin() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || (session.user as any).role !== "admin") {
    redirect("/admin/login?error=AccessDenied");
  }

  return session;
}

/**
 * Check if current user has admin role
 */
export async function isAdmin(): Promise<boolean> {
  try {
    const session = await getSession();
    const result = session?.user && (session.user as any).role === "admin";
    return result ? true : false;
  } catch {
    return false;
  }
}

/**
 * Get current user ID from session
 */
export async function getCurrentUserId(): Promise<string | null> {
  try {
    const session = await getSession();
    return (session?.user as any)?.id || null;
  } catch {
    return null;
  }
}
