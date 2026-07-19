import "../../public/assets/css/plugins/fontawesome-5.css";
import "../../public/assets/css/plugins/animate.min.css";
import "../../public/assets/css/plugins/unicons.css";

import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/bar-theme.css";

export const metadata = {
  title: "Parking Lot Striping | BAR Striping Services | Free Quotes",
  description:
    "Professional parking lot striping, re-striping, ADA-compliant markings, fire lanes & warehouse floor striping in the Birmingham, AL area. Locally owned, free quotes — call 205-240-3158.",
  keywords: [
    "parking lot striping",
    "parking lot re-striping",
    "line striping company",
    "ADA parking lot striping",
    "fire lane striping",
    "warehouse floor striping",
    "pavement markings",
    "parking lot striping Birmingham AL",
  ],
  icons: {
    icon: "/assets/images/logo/bar-favicon.svg",
  },
  openGraph: {
    title: "BAR Striping Services | Parking Lot Striping",
    description:
      "Crisp lines. Safe lots. Done right. Professional parking lot striping — call 205-240-3158 for a free quote.",
    type: "website",
    images: ["/LOGO.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="index-one">
        {children}
      </body>
    </html>
  );
}
