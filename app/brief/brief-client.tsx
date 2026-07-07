"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/mock/products";
import { siteConfig } from "@/lib/site-config";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";

const BUDGETS = ["< ₦5m", "₦5m – ₦15m", "₦15m – ₦40m", "₦40m – ₦100m", "₦100m+"];
const TIMES = ["ASAP", "1 month", "2–3 months", "This quarter", "Just planning"];

export function BriefClient() {
  const router = useRouter();
  const [service, setService] = useState<string>(services[0].id);
  const [budget, setBudget] = useState<string>(BUDGETS[1]);
  const [time, setTime] = useState<string>(TIMES[1]);
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitting(true); setTimeout(() => router.push("/thank-you"), 700); };

  return (
    <div className="min-h-screen bg-canvas">
      <div className="container-x py-10 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-[13px] muted hover:text-[color:var(--ink)] font-mono uppercase tracking-[.14em]"><ArrowLeft className="w-4 h-4" /> Back</Link>
        <div className="mt-10 max-w-3xl">
          <div className="eyebrow">Start a project</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[76px] font-light tracking-tighter leading-[1] mt-4">Send us a <span className="italic text-[color:var(--accent)]">brief.</span></h1>
          <p className="prose-lede mt-6 max-w-xl">Five minutes here saves us both a lot of email. We&apos;ll come back within one business day with a scoping-call proposal — or a friendly no.</p>
        </div>

        <form onSubmit={submit} className="mt-12 max-w-3xl border border-line bg-white">
          <div className="p-6 md:p-10 divide-y divide-[color:var(--line)]">
            <section className="pb-8">
              <div className="font-mono text-[11px] tracking-[.14em] uppercase muted">01 · About you</div>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <Field id="name" label="Your name" required />
                <Field id="email" label="Work email" type="email" required />
                <Field id="company" label="Company / project" required />
                <Field id="role" label="Your role" placeholder="Founder, Head of Brand, etc." />
              </div>
            </section>

            <section className="py-8">
              <div className="font-mono text-[11px] tracking-[.14em] uppercase muted">02 · What we&apos;re making</div>
              <div className="mt-6">
                <div className="label">Primary service</div>
                <div className="mt-3 grid sm:grid-cols-2 gap-2">
                  {services.map((s) => (
                    <label key={s.id} className={`flex items-start gap-3 p-3.5 border cursor-pointer transition-colors ${service === s.id ? "border-ink bg-paper" : "border-line hover:border-[color:var(--charcoal)]"}`}>
                      <input type="radio" name="s" checked={service === s.id} onChange={() => setService(s.id)} className="mt-1 accent-black" />
                      <div className="flex-1 min-w-0"><div className="text-[14px] font-medium leading-tight">{s.title}</div><div className="text-[12px] muted mt-1 font-mono uppercase tracking-[.1em]">{s.duration}</div></div>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-8">
              <div className="font-mono text-[11px] tracking-[.14em] uppercase muted">03 · Budget & timing</div>
              <div className="mt-6 space-y-6">
                <div>
                  <div className="label">Budget</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (<button key={b} type="button" onClick={() => setBudget(b)} className={`chip ${budget === b ? "chip-dark" : "hover:border-[color:var(--ink)]"}`}>{b}</button>))}
                  </div>
                </div>
                <div>
                  <div className="label">When do you want to start?</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {TIMES.map((t) => (<button key={t} type="button" onClick={() => setTime(t)} className={`chip ${time === t ? "chip-dark" : "hover:border-[color:var(--ink)]"}`}>{t}</button>))}
                  </div>
                </div>
              </div>
            </section>

            <section className="py-8">
              <div className="font-mono text-[11px] tracking-[.14em] uppercase muted">04 · The brief</div>
              <div className="mt-6"><label className="label" htmlFor="brief">Tell us what you&apos;re working on</label><textarea id="brief" required rows={8} className="input-rect input mt-2 resize-y" placeholder="A paragraph is enough. What are you building, why now, and what does &lsquo;done&rsquo; look like?" /></div>
              <div className="mt-4"><label className="label" htmlFor="link">Any links we should look at?</label><input id="link" className="input-rect input mt-2" placeholder="A pitch deck, a live site, an inspiration board — anything." /></div>
            </section>

            <section className="pt-8">
              <div className="flex items-start gap-3 text-[13.5px] muted"><ShieldCheck className="w-4 h-4 mt-0.5 text-[color:var(--accent)]" /><span>We treat every brief as confidential. Read our <Link href="/faq" className="underline underline-offset-4 text-[color:var(--ink)]">FAQ</Link>.</span></div>
              <button disabled={submitting} className="btn btn-accent btn-lg w-full mt-6">{submitting ? "Sending…" : "Send brief"}</button>
              <p className="mt-3 text-[12px] muted text-center font-mono">Prefer to email? {siteConfig.brand.email}</p>
            </section>
          </div>
        </form>

        <div className="mt-10 max-w-3xl grid md:grid-cols-3 gap-4">
          {[{ title: "Reply within 1 day", body: "You&apos;ll hear back from a partner." }, { title: "30-min scoping call", body: "If we&apos;re a fit, we jump on a call." }, { title: "A written proposal", body: "A fixed-fee scope of work you can share with your team." }].map((s, i) => (
            <div key={s.title} className="border border-line p-5"><div className="font-mono text-[11px] muted tracking-[.14em]">0{i + 1}</div><div className="font-display font-medium mt-3">{s.title}</div><div className="text-[13px] muted mt-1" dangerouslySetInnerHTML={{ __html: s.body }} /></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({ id, label, type = "text", placeholder, required }: { id: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return <div><label className="label" htmlFor={id}>{label}</label><input id={id} type={type} required={required} placeholder={placeholder} className="input-rect input mt-2" /></div>;
}
