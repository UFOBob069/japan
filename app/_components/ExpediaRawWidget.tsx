// app/_components/ExpediaRawWidget.js
"use client";

export default function ExpediaRawWidget() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <!-- Expedia snippet BEGIN -->
          <div class="eg-widget" data-widget="search" data-program="jp-expedia" data-lobs="stays" data-network="pz" data-camref="1100ltWgV"></div>
          <script
            class="eg-widgets-script"
            src="https://affiliates.expediagroup.com/products/widgets/assets/eg-widgets.js"
            async
          ></script>
          <!-- Expedia snippet END -->
        `,
      }}
    />
  );
}
