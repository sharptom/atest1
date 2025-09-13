"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Star, Zap, Shield, Wind } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState("all")
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (!isInitialized) {
      const category = searchParams.get("category")
      if (category) {
        console.log("[v0] Setting initial category from URL:", category)
        setActiveCategory(category)
      }
      setIsInitialized(true)
    }
  }, [searchParams, isInitialized])

  const categories = [
    { id: "all", label: t.products.categories.all },
    { id: "fresh-air-ac", label: t.products.categories.freshAirAc },
    { id: "sterilizing-fresh-air", label: t.products.categories.sterilizingFreshAir },
    { id: "air-purifiers", label: t.products.categories.airPurifiers },
  ]

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case "air-purifiers":
        return t.products.categoryTitles.airPurifiers
      case "sterilizing-fresh-air":
        return t.products.categoryTitles.sterilizingFreshAir
      case "fresh-air-ac":
        return t.products.categoryTitles.freshAirAc
      default:
        return t.products.categoryTitles.all
    }
  }

  const getCategoryDescription = () => {
    switch (activeCategory) {
      case "air-purifiers":
        return t.products.categoryDescriptions.airPurifiers
      case "sterilizing-fresh-air":
        return t.products.categoryDescriptions.sterilizingFreshAir
      case "fresh-air-ac":
        return t.products.categoryDescriptions.freshAirAc
      default:
        return t.products.categoryDescriptions.all
    }
  }

  const products = [
    // 消杀空净类产品
    {
      id: "kj75f-tq913bg",
      name: "KJ75F-TQ913BG",
      type: t.products.types.airPurifier,
      style: t.products.styles.wallMounted,
      image: "/product-1.png",
      category: "air-purifiers",
      features: [
        t.products.features.hepaH13Filter,
        t.products.features.uvSterilization,
        t.products.features.smartControl,
        t.products.features.lowNoise,
      ],
      specs: {
        cadr: "750m³/h",
        coverage: "50-85㎡",
        power: "75W",
        noise: "≤35dB",
      },
    },
    {
      id: "bri-z-42205",
      name: "BRI-Z-42205",
      type: t.products.types.airSterilizer,
      style: t.products.styles.wallMounted,
      image: "/product-2.png",
      category: "air-purifiers",
      features: [
        t.products.features.plasmaSterilization,
        t.products.features.ozoneFree,
        t.products.features.medicalGrade,
        t.products.features.remoteControl,
      ],
      specs: {
        cadr: "420m³/h",
        coverage: "30-50㎡",
        power: "42W",
        noise: "≤30dB",
      },
    },
    {
      id: "bri-z-7b200a",
      name: "BRI-Z-7B200A/BRI-Z-7B100A",
      type: t.products.types.airPurifier,
      style: t.products.styles.wallMounted,
      image: "/product-3.png",
      category: "air-purifiers",
      features: [
        t.products.features.dualModelOptions,
        t.products.features.advancedFiltration,
        t.products.features.energyEfficient,
        t.products.features.compactDesign,
      ],
      specs: {
        cadr: "200m³/h",
        coverage: "20-35㎡",
        power: "45W",
        noise: "≤32dB",
      },
    },
    // 杀毒新风类产品
    {
      id: "xs-d150a",
      name: "XS-D150A/250A/350A/500A",
      type: t.products.types.freshAirPurifier,
      style: t.products.styles.ceilingMounted,
      image: "/product-4.png",
      category: "sterilizing-fresh-air",
      features: [
        t.products.features.multipleCapacityOptions,
        t.products.features.freshAirPurification,
        t.products.features.ceilingInstallation,
        t.products.features.highEfficiency,
      ],
      specs: {
        cadr: "150-500m³/h",
        coverage: "15-50㎡",
        power: "35-120W",
        noise: "≤38dB",
      },
    },
    {
      id: "eh-z-7b200f",
      name: "EH-Z-7B200F",
      type: t.products.types.freshAirPurifier,
      style: t.products.styles.wallMounted,
      image: "/product-5.png",
      category: "sterilizing-fresh-air",
      features: [
        t.products.features.wallInstallation,
        t.products.features.freshAirExchange,
        t.products.features.heatRecovery,
        t.products.features.smartControl,
      ],
      specs: {
        cadr: "200m³/h",
        coverage: "20-35㎡",
        power: "55W",
        noise: "≤35dB",
      },
    },
    {
      id: "eh-z-7g400",
      name: "EH-Z-7G400/7G750",
      type: t.products.types.freshAirPurifier,
      style: t.products.styles.floorStanding,
      image: "/product-6.png",
      category: "sterilizing-fresh-air",
      features: [
        t.products.features.largeCapacity,
        t.products.features.floorStanding,
        t.products.features.professionalGrade,
        t.products.features.highPerformance,
      ],
      specs: {
        cadr: "400-750m³/h",
        coverage: "40-75㎡",
        power: "80-150W",
        noise: "≤42dB",
      },
    },
    {
      id: "xs-b400a",
      name: "XS-B400A/XS-B200B",
      type: t.products.types.freshAirPurifier,
      style: t.products.styles.wallMounted,
      image: "/product-7.png",
      category: "sterilizing-fresh-air",
      features: [
        t.products.features.dualModelSeries,
        t.products.features.wallMounting,
        t.products.features.energySaving,
        t.products.features.quietOperation,
      ],
      specs: {
        cadr: "200-400m³/h",
        coverage: "20-40㎡",
        power: "45-85W",
        noise: "≤36dB",
      },
    },
    {
      id: "xc-d60b",
      name: "XC-D60B/XC-D75B",
      type: t.products.types.freshAirDehumidifier,
      style: t.products.styles.ceilingMounted,
      image: "/product-8.png",
      category: "sterilizing-fresh-air",
      features: [
        t.products.features.threeInOneFunction,
        t.products.features.dehumidification,
        t.products.features.freshAir,
        t.products.features.airPurification,
      ],
      specs: {
        cadr: "60-75m³/h",
        coverage: "25-35㎡",
        power: "65-85W",
        noise: "≤40dB",
      },
    },
    // 新风空调类产品
    {
      id: "kfr-46gw",
      name: "KFR-46GW/8B46A01",
      type: t.products.types.hunterAirConditioner,
      style: t.products.styles.wallMounted,
      image: "/product-9.png",
      category: "fresh-air-ac",
      features: [
        t.products.features.airConditioning,
        t.products.features.airPurification,
        t.products.features.virusElimination,
        t.products.features.smartControl,
      ],
      specs: {
        cadr: "460m³/h",
        coverage: "18-28㎡",
        power: "1200W",
        noise: "≤45dB",
      },
    },
  ]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span suppressHydrationWarning>{t.products.common.backToHome}</span>
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" suppressHydrationWarning>{getCategoryTitle()}</h1>
          <p className="text-xl text-slate-300 max-w-2xl" suppressHydrationWarning>{getCategoryDescription()}</p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={
                activeCategory === category.id
                  ? "bg-slate-900 hover:bg-slate-800 text-white cursor-pointer"
                  : "bg-white hover:bg-slate-100 text-slate-700 border-slate-300 cursor-pointer hover:border-slate-400"
              }
              onClick={() => {
                console.log("[v0] User clicked category:", category.id)
                console.log("[v0] Previous category:", activeCategory)
                setActiveCategory(category.id)
              }}
            >
              <span suppressHydrationWarning>{category.label}</span>
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium" suppressHydrationWarning>
                  {product.style}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-lg text-blue-600 font-medium" suppressHydrationWarning>{product.type}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    <span suppressHydrationWarning>{t.products.common.keyFeatures}</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span suppressHydrationWarning>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-green-500" />
                    <span suppressHydrationWarning>{t.products.common.specifications}</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">CADR:</span>
                      <span className="font-medium">{product.specs.cadr}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600" suppressHydrationWarning>{t.products.common.coverage}:</span>
                      <span className="font-medium">{product.specs.coverage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600" suppressHydrationWarning>{t.products.common.power}:</span>
                      <span className="font-medium">{product.specs.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600" suppressHydrationWarning>{t.products.common.noise}:</span>
                      <span className="font-medium">{product.specs.noise}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Shield className="h-4 w-4 mr-2" />
                    <span suppressHydrationWarning>{t.products.common.viewDetails}</span>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Wind className="h-4 w-4 mr-2" />
                    <span suppressHydrationWarning>{t.products.common.contactSales}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 py-12 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-4" suppressHydrationWarning>{t.products.common.needCustomSolutions}</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto" suppressHydrationWarning>{t.products.common.customSolutionsDesc}</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <span suppressHydrationWarning>{t.products.common.contactExperts}</span>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
