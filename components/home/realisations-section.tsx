"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/project-card";
import { projects, categories } from "@/data/projects";
import type { Category } from "@/data/projects";
import Container from "../shared/container";
import Tag from "../ui/tag";

export default function RealisationsSection() {
  const [active, setActive] = useState<Category>("Tout les projets");

  const filtered =
    active === "Tout les projets"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <Container className=" ">
      <div className="flex flex-col gap-10 xl:gap-16">
        <div className="flex flex-col gap-5 lg:flex-row items-center justify-center md:justify-between md:gap-6">
          <span className="lg:hidden flex">
            <Tag>Propulez votre entreprise</Tag>
          </span>
          <h2 className="font-heading font-normal text-[28px] leading-[34px] md:text-[36px] md:leading-[44px] xl:text-[48px] xl:leading-[56px] text-title shrink-0">
            Nos réalisations
          </h2>

          <div className="hidden lg:flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-[15px] cursor-pointer py-1.5 rounded-full text-[13px] md:text-[14px] font-medium transition-colors whitespace-nowrap
                  ${
                    active === cat
                      ? "bg-primary text-white"
                      : "bg-[#F4F4F4] text-title hover:bg-[#E8E8E8]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-[27px] lg:border border-surface-muted rounded-10 p-3 lg:p-10 xl:gap-6">
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
