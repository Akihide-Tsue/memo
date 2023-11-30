const [stripePromise, setStripePromise] = useState<Stripe | PromiseLike<Stripe | null> | null>(null);

useEffect(() => {
  if (!isApplication) {
    import("@stripe/stripe-js").then((stripeJs) => {
      setStripePromise(stripeJs.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""));
    });
  }
}, [isApplication]);
