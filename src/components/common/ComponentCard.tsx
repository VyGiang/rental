import React from "react"

interface ComponentCardProps {
  title: React.ReactNode
  text?: string
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string // Additional custom classes for styling
  rightAction?: React.ReactNode
  leftAction?: React.ReactNode
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  text,
  icon,
  children,
  className = "",
  rightAction,
  leftAction,
}) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`}
    >
      {/* Card Header */}
      <div className="px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        {/* responsive icon tren sm:🔽 Thay đổi chỗ này: từ flex-col -> sm:flex-row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          {/* icon + title cùng hàng từ sm */}
          <div className="flex items-center gap-2">
            {icon && <span className="text-xl">{icon}</span>}
            <h3 className="text-base text-gray-800 dark:text-white/90">
              {text && (
                <span className="font-normal text-gray-500 dark:text-gray-300 mr-1">
                  {text}
                </span>
              )}
              <span className="font-semibold">{title}</span>
            </h3>
          </div>

          {leftAction && <div className="mt-2 sm:mt-0">{leftAction}</div>}
        </div>

        {rightAction && (
          <div className="flex flex-wrap gap-2">{rightAction}</div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  )
}

export default ComponentCard
