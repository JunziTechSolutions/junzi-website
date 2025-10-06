"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Form from "../form/Form"
import { Modal } from "@/components/ui/modal"
import { useModal } from "../hooks/useModal"
import Link from "next/link";

export default function CtaSection() {
  const { isOpen, isClosing, openModal, closeModal } = useModal()

  return (
    <>
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-[#0b1e54] dark:from-primary dark:to-blue-800 text-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
          Ready to Build Your Next Digital Breakthrough?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-blue-100 dark:text-blue-200 mb-10">
          Let's discuss your project. We're here to help you navigate the
          complexities of digital product development and turn your vision into
          a reality.
        </p>
        <Link href="/form">
        <Button
          size="lg"
          className="bg-white hover:bg-slate-100 text-primary rounded-full text-[#0b1e54] px-10 py-4 text-base font-semibold shadow-lg group"
        >
          Start a Project{" "}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        </Link>
      </div>
    </section>
      <Modal isOpen={isOpen} isClosing={isClosing} onClose={closeModal}>
      <Form />
    </Modal>
    </>
  );
}
