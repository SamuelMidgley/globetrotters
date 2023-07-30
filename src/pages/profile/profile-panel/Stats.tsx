interface StatsProp {
  count: string
  label: string
}

export const Stats = ({ count, label }: StatsProp) => {
  return (
    <div className="w-14">
      <p className="font-semibold">{count}</p>
      <p className="text-xs">{label}</p>
    </div>
  )
}
