export default function gerarPassword(): string {
  return Math.random().toString(36).slice(-6);
}
