export class GlobalConstants {
  // message
  public static genericError: 'Something went wrong. Please try again later';

  public static unauthoroized:string = "You are not authorized person to access this page."
  // Regex
  public static nameRegex: string = '[a-zA-Z0-9]';
  public static emailRegex: string =
    '[A-za-z0-9._%-]+@[A-za-z0-9._%-]+\\.[a-z]{2,3}';
  public static contactNumberRegex: string = '[e0-9]{10,10}$';

  // veriable
  public static error: string = 'error';
}
