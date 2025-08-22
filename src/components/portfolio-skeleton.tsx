"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const PortfolioCardSkeleton = () => (
  <Card className="animate-pulse">
    <CardHeader className="pb-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <Skeleton className="w-10 h-10 rounded-lg" />
          <Skeleton className="w-24 h-6 rounded-full" />
        </div>
      </div>
      <Skeleton className="h-7 w-3/4 mt-4" />
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-6 w-16 rounded-md" />
        <Skeleton className="h-6 w-20 rounded-md" />
        <Skeleton className="h-6 w-18 rounded-md" />
      </div>
      
      <div className="flex items-center space-x-3">
        <Skeleton className="h-9 w-24 rounded-lg" />
        <Skeleton className="h-9 w-20 rounded-lg" />
      </div>
    </CardContent>
  </Card>
)

export const PortfolioGridSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[...Array(4)].map((_, i) => (
      <PortfolioCardSkeleton key={i} />
    ))}
  </div>
)