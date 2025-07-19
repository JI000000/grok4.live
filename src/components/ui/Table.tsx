import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  isHeader?: boolean;
}

export function Table({ children, className }: TableProps) {
  return (
    <div className="overflow-x-auto my-8">
      <table className={cn(
        "w-full border-collapse bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50",
        className
      )}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ children, className }: TableHeaderProps) {
  return (
    <thead className={cn("bg-gray-800/70", className)}>
      {children}
    </thead>
  );
}

export function TableBody({ children, className }: TableBodyProps) {
  return (
    <tbody className={cn("divide-y divide-gray-700/50", className)}>
      {children}
    </tbody>
  );
}

export function TableRow({ children, className }: TableRowProps) {
  return (
    <tr className={cn(
      "hover:bg-gray-800/30 transition-colors duration-200",
      className
    )}>
      {children}
    </tr>
  );
}

export function TableCell({ children, className, isHeader = false }: TableCellProps) {
  const Component = isHeader ? 'th' : 'td';
  
  return (
    <Component className={cn(
      "px-6 py-4 text-left text-sm",
      isHeader 
        ? "font-semibold text-gray-200 bg-gray-800/50 border-b border-gray-700/50" 
        : "text-gray-300",
      className
    )}>
      {children}
    </Component>
  );
}

// 便捷的表格组件
interface DataTableProps {
  headers: string[];
  data: (string | number)[][];
  className?: string;
}

export function DataTable({ headers, data, className }: DataTableProps) {
  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableCell key={index} isHeader>
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
} 