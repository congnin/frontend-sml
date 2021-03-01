export class DateTimeHelper {
  static ZeroPad = (num: number, places: number) => String(num).padStart(places, '0');

  static ToYYYYMMddString(date: Date): string {
    return date.getFullYear() + '-' + this.ZeroPad(date.getMonth() + 1, 2) + '-' + date.getDate();
  }
}
