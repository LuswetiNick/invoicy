import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Section,
  Hr,
} from "@react-email/components";

interface MagicLinkEmailProps {
  magicLink: string;
}

export const MagicLinkEmail = ({ magicLink }: MagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Sign in to your Invoicy account</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoSection}>
          <Heading style={logo}> Invoicy</Heading>
        </Section>

        <Heading style={h1}>Sign in to Invoicy</Heading>

        <Text style={text}>
          Hello! We received a request to sign in to your Invoicy .
        </Text>

        <Section style={buttonSection}>
          <Link href={magicLink} style={button}>
            Sign in to Invoicy
          </Link>
        </Section>

        <Text style={text}>
          This link will expire in 5 minutes. If you didn't request this sign-in
          link, you can safely ignore this email.
        </Text>

        <Hr style={hr} />

        <Text style={alternativeText}>
          Or copy and paste this link into your browser:
        </Text>
        <Text style={linkText}>{magicLink}</Text>

        <Hr style={hr} />

        <Section style={footerSection}>
          <Text style={footerText}>
            If you have any questions, please contact our support team.
          </Text>
          <Text style={footerText}>
            <Link href="#" style={footerLink}>
              Invoicy
            </Link>
            {" • "}
            <Link href="#" style={footerLink}>
              Support
            </Link>
            {" • "}
            <Link href="#" style={footerLink}>
              Privacy Policy
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default MagicLinkEmail;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "580px",
};

const logoSection = {
  padding: "32px 40px",
  textAlign: "center" as const,
};

const logo = {
  color: "#1f2937",
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0",
  textAlign: "center" as const,
};

const h1 = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 40px 20px",
  textAlign: "center" as const,
};

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 40px",
};

const buttonSection = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#000000",
  borderRadius: "8px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "bold",
  lineHeight: "50px",
  textAlign: "center" as const,
  textDecoration: "none",
  width: "200px",
  cursor: "pointer",
};

const alternativeText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "16px 40px 8px",
};

const linkText = {
  color: "#3b82f6",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0 40px 16px",
  wordBreak: "break-all" as const,
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "32px 40px",
};

const footerSection = {
  margin: "32px 40px 0",
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "18px",
  margin: "8px 0",
  textAlign: "center" as const,
};

const footerLink = {
  color: "#3b82f6",
  textDecoration: "none",
};
