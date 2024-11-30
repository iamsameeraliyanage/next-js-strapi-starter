import { Link } from "@/i18n/routing";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ModelDesign({ params }: PageProps) {
  const { id } = await params;
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            ModelDetails
          </h2>
          <Link href={`/design/${id}`}>Go to Design Page</Link>
        </div>
      </div>
    </div>
  );
}
