
import { NumberTicker } from "../ui/number-ticker"
import { List2 } from "./ListAchievments"

export default function StatsSection() {
    return (
        <>
        <section className="py-16">
            <div className="container mx-auto">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-semibold lg:text-5xl">Achievements & Projects Completed</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg max-w-3xl mx-auto">
                            We have successfully completed numerous projects and achieved significant milestones, showcasing our commitment to delivering impactful solutions for clients and partners.
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
                        <div className="text-center">
                            <div className="text-4xl font-bold">
                                <NumberTicker value={20} delay={0.2} />+
                            </div>
                            <p className="text-muted-foreground">Certifications</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold">
                                <NumberTicker value={10} delay={0.4} />+
                            </div>
                            <p className="text-muted-foreground">Projects Innovations</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold">
                                <NumberTicker value={2} delay={0.6} /> Years
                            </div>
                            <p className="text-muted-foreground">Works Experience</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold">
                                <NumberTicker value={5} delay={0.8} />
                            </div>
                            <p className="text-muted-foreground">Awarding Rewards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <List2 />
        </>
    )
}
