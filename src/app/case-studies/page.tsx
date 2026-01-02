import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, Briefcase } from "lucide-react"

import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Customer success stories and project highlights.",
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            Company
          </span>
        }
        title="Case studies"
        description={
          <>
            This section is ready for your project stories (weighbridge installs,
            calibration programs, and custom integrations).
          </>
        }
        actions={
          <Button asChild size="xl">
            <Link href="/contact">
              Share a project <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        }
        showFloatingIcons={false}
      />

      <section className="container-wide py-16">
        <Card className="border-white/10 bg-white/5">
          <CardContent className="p-10 text-center">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Briefcase className="h-7 w-7 text-brand-300" />
            </div>
            <h2 className="mt-6 text-2xl font-display font-bold text-white">
              Coming soon
            </h2>
            <p className="mt-3 text-steel-300 max-w-2xl mx-auto">
              We’ll publish real deployments with photos, scope, timelines, and
              outcomes. If you’d like your project featured, contact us.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Our services</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}


