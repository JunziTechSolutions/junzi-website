export const GetFundedSection = () => {
  const calendarUrl = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2oVv-sePyLOBENnkFnDy0WsL2YYCgffflb7BtXwcXD_y5Y3U1STtH6V4Zn1db9biq3X3TarrEI';
  // Design tokens для консистентности - responsive
  const SPACING = {
    SECTION_VERTICAL: {
      desktop: '40px',
      mobile: '24px'
    },
    CARD_INTERNAL: {
      desktop: '44px',
      mobile: '32px'
    },
    CARD_HORIZONTAL: {
      desktop: '74px', 
      mobile: '24px'
    },
    ELEMENT_GAPS: {
      TITLE_TO_LINE: {
        desktop: '20px',
        mobile: '16px'
      },
      LINE_TO_PRICE: {
        desktop: '20px',
        mobile: '16px'
      },
      PRICE_TO_DESCRIPTION: {
        desktop: '34px',
        mobile: '24px'
      },
      DESCRIPTION_TO_BUTTON: {
        desktop: '36px',
        mobile: '28px'
      }
    }
  };

  const COLORS = {
    GRADIENT_PRIMARY: 'linear-gradient(278.09deg, #0B1E54 12.96%, #4FABFF 78.29%)',
    GRADIENT_SECONDARY: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
    BORDER: '#DFE1F5',
    TEXT_PRIMARY: '#111827',
    TEXT_SECONDARY: '#465478'
  };

  return (
    <section className="py-8 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <div className="flex flex-col items-center gap-4 sm:gap-0">
          <h2 
            className="get-funded-title"
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 500,
              background: COLORS.GRADIENT_PRIMARY,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            <span className="block sm:inline">Ready to</span>{' '}
            <span 
              className="get-funded-badge inline-flex items-center justify-center"
              style={{
                border: `2.75px solid ${COLORS.TEXT_PRIMARY}`,
                background: COLORS.GRADIENT_PRIMARY,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Get Funded?
            </span>
          </h2>
        </div>
        
        {/* Description */}
        <p 
          className="get-funded-description mt-8 sm:mt-12"
          style={{
            fontFamily: 'Manrope',
            fontWeight: 400,
            color: COLORS.TEXT_PRIMARY
          }}
        >
          Stop waiting. Start building momentum. Get your complete investor package in just 7 days.
        </p>
         
        {/* Pricing Card */}
        <div 
          className="get-funded-card mx-auto mt-8 sm:mt-10 mb-8 sm:mb-10 flex flex-col items-center"
          style={{
            borderRadius: '21.95px',
            border: `1.1px solid ${COLORS.BORDER}`,
            background: 'white',
            boxShadow: '0px 8px 32px 0px rgba(17, 24, 39, 0.08), 0px 2px 8px 0px rgba(17, 24, 39, 0.04)'
          }}
        >
          {/* Card Title */}
          <h3 
            className="get-funded-card-title text-center"
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              color: COLORS.TEXT_PRIMARY
            }}
          >
            Investor-Ready Package
          </h3>
          
          {/* Divider Line */}
          <div 
            className="w-full"
            style={{
              height: '1.1px',
              backgroundColor: COLORS.BORDER,
              marginTop: 'var(--gap-title-to-line)'
            }}
          />
          
          {/* Price */}
          <div 
            className="get-funded-price"
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 500,
              background: COLORS.GRADIENT_SECONDARY,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginTop: 'var(--gap-line-to-price)'
            }}
          >
            $489
          </div>
          
          {/* Price Description */}
          <p 
            className="get-funded-price-desc text-center"
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 300,
              color: COLORS.TEXT_SECONDARY,
              marginTop: 'var(--gap-price-to-description)'
            }}
          >
            One-time payment. Everything you<br className="hidden sm:block" /><span className="sm:hidden"> </span>need.
          </p>
          
          {/* Get Started Button */}
          <button 
            className="get-funded-button hover:cursor-pointer"
            style={{
              borderRadius: '104.3px',
              background: COLORS.GRADIENT_SECONDARY,
              border: 'none',
              cursor: 'pointer',
              marginTop: 'var(--gap-description-to-button)',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              textAlign: 'center',
              color: 'white',
              transition: 'all 0.2s ease-in-out'
            }}
            aria-label="Open calendar to get started"
            onClick={() => { window.location.href = calendarUrl; }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = calendarUrl;
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0px 12px 24px 0px rgba(11, 30, 84, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      <style jsx>{`
        .get-funded-title {
          font-size: 32px;
          line-height: 120%;
          letter-spacing: -0.03em;
        }
        
        @media (min-width: 640px) {
          .get-funded-title {
            font-size: 71.03px;
          }
        }

        .get-funded-badge {
          width: 280px;
          height: 70px;
          border-radius: 70px;
          padding: 12px 20px;
          font-size: 32px;
          line-height: 120%;
          letter-spacing: -0.03em;
        }
        
        @media (min-width: 640px) {
          .get-funded-badge {
            width: 495px;
            height: 110px;
            border-radius: 137.34px;
            padding: 24px;
            font-size: 71.03px;
          }
        }

        .get-funded-description {
          font-size: 18px;
          line-height: 115%;
          letter-spacing: -0.02em;
        }
        
        @media (min-width: 640px) {
          .get-funded-description {
            font-size: 25.37px;
          }
        }

        .get-funded-card {
          width: 100%;
          max-width: 340px;
          min-height: 320px;
          padding: ${SPACING.CARD_INTERNAL.mobile} ${SPACING.CARD_HORIZONTAL.mobile};
          --gap-title-to-line: ${SPACING.ELEMENT_GAPS.TITLE_TO_LINE.mobile};
          --gap-line-to-price: ${SPACING.ELEMENT_GAPS.LINE_TO_PRICE.mobile};
          --gap-price-to-description: ${SPACING.ELEMENT_GAPS.PRICE_TO_DESCRIPTION.mobile};
          --gap-description-to-button: ${SPACING.ELEMENT_GAPS.DESCRIPTION_TO_BUTTON.mobile};
        }
        
        @media (min-width: 640px) {
          .get-funded-card {
            width: 530px;
            max-width: none;
            height: 385px;
            min-height: auto;
            padding: ${SPACING.CARD_INTERNAL.desktop} ${SPACING.CARD_HORIZONTAL.desktop};
            --gap-title-to-line: ${SPACING.ELEMENT_GAPS.TITLE_TO_LINE.desktop};
            --gap-line-to-price: ${SPACING.ELEMENT_GAPS.LINE_TO_PRICE.desktop};
            --gap-price-to-description: ${SPACING.ELEMENT_GAPS.PRICE_TO_DESCRIPTION.desktop};
            --gap-description-to-button: ${SPACING.ELEMENT_GAPS.DESCRIPTION_TO_BUTTON.desktop};
          }
        }

        .get-funded-card-title {
          font-size: 24px;
          line-height: 100%;
          letter-spacing: -0.04em;
        }
        
        @media (min-width: 640px) {
          .get-funded-card-title {
            font-size: 35.13px;
            white-space: nowrap;
          }
        }

        .get-funded-price {
          font-size: 48px;
          line-height: 100%;
          letter-spacing: 0%;
        }
        
        @media (min-width: 640px) {
          .get-funded-price {
            font-size: 66.81px;
          }
        }

        .get-funded-price-desc {
          font-size: 14px;
          line-height: 120%;
          letter-spacing: -0.04em;
        }
        
        @media (min-width: 640px) {
          .get-funded-price-desc {
            font-size: 17.56px;
          }
        }

        .get-funded-button {
          width: 240px;
          height: 52px;
          padding: 12px 20px;
          font-size: 14px;
          line-height: 130%;
          letter-spacing: 0%;
        }
        
        @media (min-width: 640px) {
          .get-funded-button {
            width: 281px;
            height: 62px;
            padding: 14.6px 25.03px;
            font-size: 16.69px;
          }
        }
      `}</style>
    </section>
  );
};