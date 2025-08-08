import * as React from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CollapsibleSectionProps {
  title: string
  children: React.ReactNode
  className?: string
  defaultOpen?: boolean
}

export const CollapsibleSection = ({ 
  title, 
  children, 
  className,
  defaultOpen = false 
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div className={cn("bg-card rounded-xl shadow-card-custom border", className)}>
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 rounded-xl"
      >
        <h3 className="text-xl font-semibold text-banking-dark">{title}</h3>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-banking-blue" />
        ) : (
          <ChevronRight className="h-5 w-5 text-banking-blue" />
        )}
      </Button>
      
      {isOpen && (
        <div className="px-6 pb-6 pt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export const CollapsibleItem = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) => {
  return (
    <div className={cn(
      "bg-gradient-primary text-white px-4 py-3 rounded-lg text-center font-medium shadow-banking hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105",
      className
    )}>
      {children}
    </div>
  )
}