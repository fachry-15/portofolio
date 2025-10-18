import { Button } from '@/components/ui/button'
// Import icons for email and LinkedIn
import { Mail, Linkedin } from 'lucide-react'

export default function CallToAction() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Let's Work Together</h2>
                    <p className="mt-4">Ready to bring your ideas to life? I'm available for freelance projects and collaborations.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <a href="mailto:fachry15050503@gmail.com">
                                <Mail className="size-5" />
                                <span>Contact Me</span>
                            </a>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="size-5" />
                                <span>See LinkedIn</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
