import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Bachelor's in EEE",
    description: "VIT Vellore (2018) • CGPA: 8.2/10"
  },
  {
    icon: Briefcase,
    title: "7+ Years",
    description: "Professional Experience"
  },
  {
    icon: Calendar,
    title: "50+ Projects",
    description: "Successfully Delivered"
  },
  {
    icon: GraduationCap,
    title: "99.9%",
    description: "Uptime Achieved"
  }
]

const technologies = [
  "AWS", "Kubernetes", "Docker", "Terraform", "Jenkins",
  "Python", "Bash", "Ansible", "ArgoCD", "ELK Stack"
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4])

  return (
    <section id="about" className="py-20 px-4 relative z-10 bg-background/80 backdrop-blur-sm overflow-hidden">
      <motion.div 
        style={{ y, opacity }} 
        className="max-w-6xl mx-auto"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 professional-heading">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto professional-text">
            Dedicated Computer Science Engineering student specializing in optimization and soft computing techniques
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="space-y-6 transform-gpu"
          >
            <div className="space-y-6">
              <div className="relative">
                <span className="float-left text-6xl font-serif text-golden mr-2 mt-1 leading-none">A</span>
                <p className="text-lg leading-relaxed text-foreground font-serif">
                  s a dedicated engineering student with an insatiable curiosity for tackling intricate challenges, I'm Deepraj Das, eager to embark on a career at the crossroads of innovation and practical application. Throughout my academic journey, I've honed my skills and knowledge in Computer Science and Engineering and have eagerly applied them to a variety of projects with the aim of making a meaningful impact.
                </p>
              </div>

              <div className="bg-muted/20 border-l-4 border-golden p-4 rounded-r-lg">
                <p className="text-lg leading-relaxed text-foreground font-serif">
                  I am currently engaged in my final year project, which centers around optimization using advanced soft computing techniques. This project is focused on addressing the complex challenges posed by high-dimensional problems and aims to identify optimal solutions with precision and efficiency. Through the application of state-of-the-art soft computing methods, I am working towards enhancing our ability to solve intricate problems in various domains.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-foreground font-serif">
                This project underscores my commitment to leveraging cutting-edge technology and computational methods to deliver effective solutions for real-world optimization challenges. I'm passionate about exploring the intersection of theoretical concepts and practical applications in computer science.
              </p>

              <div className="bg-muted/20 border-l-4 border-golden p-4 rounded-r-lg">
                <p className="text-lg leading-relaxed text-foreground font-serif">
                  My academic focus encompasses various areas of computer science including algorithms, data structures, machine learning, and optimization techniques. I'm particularly interested in how soft computing approaches can be applied to solve complex, real-world problems.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground font-serif italic">
                When I'm not working on academic projects, I enjoy exploring emerging technologies, participating in coding challenges, 
                and contributing to open-source projects that can make a positive impact in the tech community.
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold professional-heading">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Badge variant="secondary" className="text-sm py-1">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Location & Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>Senior SRE at Signeasy</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2, type: "spring", stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.2 } 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="p-6 hover-elevate transition-all duration-300 transform-gpu perspective-1000">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold">{highlight.title}</h3>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}

            {/* Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Card className="p-6 bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Let's Work Together</h3>
                  <p className="text-muted-foreground mb-4">
                    Ready to bring your ideas to life with cutting-edge technology?
                  </p>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary font-medium hover:underline"
                    data-testid="button-contact-cta"
                  >
                    Get In Touch →
                  </button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}