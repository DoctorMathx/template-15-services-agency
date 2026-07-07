import type { Metadata } from "next";
import { Suspense } from "react";
import { WorkIndex } from "./work-index";
export const metadata: Metadata = { title: "Selected work" };
export default function WorkPage() { return <Suspense fallback={null}><WorkIndex /></Suspense>; }
