export default function formatWeekday(weekday: string): string {
  const upperCasedWeekDay = `${weekday[0].toUpperCase()}${weekday.slice(1)}`;

  const suffixedWeekday = `${upperCasedWeekDay}-feira`;

  return suffixedWeekday;
}
