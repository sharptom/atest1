"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage() // 使用多语言hook

  const slides = [
    {
      title: t.hero.slides.airSterilization.title,
      subtitle: t.hero.slides.airSterilization.subtitle,
      description: t.hero.slides.airSterilization.description,
      image: "/modern-office-building-with-advanced-air-steriliza.jpg",
    },
    {
      title: t.hero.slides.airPurifier.title,
      subtitle: t.hero.slides.airPurifier.subtitle,
      description: t.hero.slides.airPurifier.description,
      image: "/elegant-home-living-room-with-sleek-air-purifier--.jpg",
    },
    {
      title: t.hero.slides.seasonalAppliances.title,
      subtitle: t.hero.slides.seasonalAppliances.subtitle,
      description: t.hero.slides.seasonalAppliances.description,
      image: "/cozy-bedroom-with-humidifier-and-heater-creating-c.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden -mt-24 pt-24">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" suppressHydrationWarning />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-700/60"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-24">
        <div className="max-w-2xl text-white">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-balance drop-shadow-lg" suppressHydrationWarning>
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-blue-200 text-balance drop-shadow-md" suppressHydrationWarning>
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed text-pretty max-w-xl drop-shadow-md" suppressHydrationWarning>
                {slides[currentSlide].description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg" asChild>
                <Link
                  href={
                    currentSlide === 0
                      ? "/products?category=sterilizing-fresh-air"
                      : currentSlide === 1
                        ? "/products?category=air-purifiers"
                        : "/products?category=all"
                  }
                >
                  <span suppressHydrationWarning>{t.hero.buttons.learnMore}</span> {/* 使用翻译文本 */}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
