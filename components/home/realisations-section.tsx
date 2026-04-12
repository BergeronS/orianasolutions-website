"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/project-card";
import { projects, categories } from "@/data/projects";
import type { Category } from "@/data/projects";
import Container from "../shared/container";
import Tag from "../ui/tag";
import { Typography } from "@/components/ui/typography";

export default function RealisationsSection() {
  const [active, setActive] = useState<Category>("Tout les projets");

  const filtered =
    active === "Tout les projets"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <Container className="">
      <div className="flex flex-col gap-10 xl:gap-16">
        <div className="flex flex-col gap-5 lg:flex-row items-center justify-center md:justify-between md:gap-6">
          <span className="lg:hidden flex">
            <Tag>Propulez votre entreprise</Tag>
          </span>
          <Typography variant="h4" className="shrink-0">
            Nos réalisations
          </Typography>

          <div className="hidden lg:flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-[15px] cursor-pointer py-1.5 rounded-full text-[13px] md:text-[14px] font-medium transition-colors whitespace-nowrap
                  ${active === cat
                    ? "bg-primary text-white"
                    : "bg-[#F4F4F4] text-title hover:bg-[#E8E8E8]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-7 lg:border border-surface-muted rounded-[40px] p-3 lg:p-10 xl:gap-6 2xl:gap-10">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
