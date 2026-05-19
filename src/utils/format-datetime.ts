import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDatetime(rawdate: string): string {
  const date = new Date(rawdate);
  return format(date, "dd/MM/yyyy 'às' HH'h'mm", { locale: ptBR });
}
export function formatRelativeDate(rawdate: string): string {
  const date = new Date(rawdate);
  return formatDistanceToNow(date, { locale: ptBR, addSuffix: true });
}
