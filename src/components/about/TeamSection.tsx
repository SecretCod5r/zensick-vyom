import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Users } from "lucide-react";
import vyomImage from "@/assets/vyom-founder.jpeg";
import ananyaImage from "@/assets/ananya-ojha.jpg";
import siddhantImage from "@/assets/siddhant-saha.jpg";

const team = [
  {
    name: "Vyom",
    role: "Founder & CEO",
    image: vyomImage,
  },
  {
    name: "Ananya Ojha",
    role: "Co-founder & Performance Marketing Lead",
    image: ananyaImage,
  },
  {
    name: "Siddhant Saha",
    role: "Tech & Automation Intern",
    image: siddhantImage,
  },
  {
    name: "Bibekjit Biswas",
    role: "Outreach & Social Media Intern",
    image: null as string | null,
  },
];

export function TeamSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              The Team
            </span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Meet the People Behind{" "}
            <span className="text-gradient-primary">ZENSICK</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A lean, hungry team building the agency we wish existed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative rounded-2xl p-[1px]">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.6}
                  borderWidth={1}
                />

                <div className="relative bg-card rounded-2xl overflow-hidden border border-border">
                  <div className="aspect-[3/4] overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-4xl font-display font-bold text-muted-foreground/40">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
