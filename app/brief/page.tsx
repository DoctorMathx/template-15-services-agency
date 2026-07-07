import type { Metadata } from "next";
import { BriefClient } from "./brief-client";
export const metadata: Metadata = { title: "Start a project" };
export default function BriefPage() { return <BriefClient />; }
