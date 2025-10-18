import { Logo } from '@/components/headers/logo'

// Links matching the header navigation
const links = [
    {
        title: 'Home',
        href: '#hero',
    },
    {
        title: 'About',
        href: '#about',
    },
    {
        title: 'Experience',
        href: '#experience',
    },
    {
        title: 'Education',
        href: '#education',
    },
    {
        title: 'Projects',
        href: '#projects',
    },
    {
        title: 'Testimonials',
        href: '#testimonials',
    },
]

export default function FooterSection() {
    return (
        <footer className="bg-background border-b py-12">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-between gap-12">
                    <div className="order-last flex items-center gap-3 md:order-first">
                        <a
                            href="#hero"
                            aria-label="go home">
                            <Logo />
                        </a>
                        <span className="text-muted-foreground block text-center text-sm">© {new Date().getFullYear()} Fachry, All rights reserved</span>
                    </div>

                    <div className="order-first flex flex-wrap gap-x-6 gap-y-4 md:order-last">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
