
import { IconFacebook, IconFigma, IconInstagram, IconLinkedin, IconYoutube } from "@/components";
import Link from "next/link";

export function Footer() {
    return (
        <footer className=" text-texto-green bg-fondo border-t">
            <div className="max-w-[1600px] mx-auto px-4 py-16 flex justify-between  ">
                <div>
                    <Link href={"/"}><IconFigma /></Link>
                    <div className="flex gap-2">
                        <IconInstagram />
                        <IconYoutube />
                        <IconLinkedin />
                        <IconFacebook />
                    </div>
                </div>

                <section>
                    <h3 className="font-bold mb-4">Use cases</h3>
                    <ul>
                        <li>UI design</li>
                        <li>UX design</li>
                        <li>Wireframing</li>
                        <li>Diagramming</li>
                        <li>Brainstorming</li>
                        <li>Online whiteboard</li>
                        <li>Team collaboration</li>
                    </ul>
                </section>
                <section>
                    <h3 className="font-bold mb-4">Explore</h3>
                    <ul>
                        <li>Design</li>
                        <li>Prototyping</li>
                        <li>Development features</li>
                        <li>Design systems</li>
                        <li>Collaboration features</li>
                        <li>Design process</li>
                        <li>FigJam</li>
                    </ul>
                </section>
                <section>
                    <h3 className="font-bold mb-4">Resource</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Best practices</li>
                        <li>Colors</li>
                        <li>Color wheel</li>
                        <li>Support</li>
                        <li>Developers</li>
                        <li>Resource library</li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}
