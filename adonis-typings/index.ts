declare module '@ioc:Adonis/Addons/Credentials' {
  export interface CredentialsContract {
    get(key?: string): string | Record<string, string>
    initialize(): void
  }

  export abstract class VaultContract {
    public static generateKey(length?: number): string
    public static encrypt(content: string, key: string): string
    public static decrypt(content: string, key: string): string
  }

  const Credentials: CredentialsContract
  export default Credentials
}
