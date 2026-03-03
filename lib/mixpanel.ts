"use client";

import { useEffect, useCallback } from 'react';

// Mixpanel Tracking Hook
// Use this to track custom events from any component

export function useMixpanel() {
  const track = useCallback((eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).mixpanel) {
      (window as any).mixpanel.track(eventName, {
        ...properties,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
      });
    }
  }, []);

  const trackButtonClick = useCallback((buttonText: string, buttonId?: string, additionalProps?: Record<string, any>) => {
    track('Button Click', {
      button_text: buttonText,
      button_id: buttonId || 'unlabeled',
      ...additionalProps,
    });
  }, [track]);

  const trackFormSubmit = useCallback((formName: string, formId?: string, additionalProps?: Record<string, any>) => {
    track('Form Submit', {
      form_name: formName,
      form_id: formId || 'unlabeled',
      ...additionalProps,
    });
  }, [track]);

  const trackPageView = useCallback((pageName?: string, additionalProps?: Record<string, any>) => {
    track('Page View', {
      page_name: pageName || window.location.pathname,
      ...additionalProps,
    });
  }, [track]);

  const trackFeatureEngagement = useCallback((feature: string, action: string, additionalProps?: Record<string, any>) => {
    track('Feature Engagement', {
      feature,
      action,
      ...additionalProps,
    });
  }, [track]);

  const trackPricingView = useCallback((tier: string, durationSeconds?: number) => {
    track('Pricing Tier Viewed', {
      tier,
      duration_seconds: durationSeconds,
    });
  }, [track]);

  const trackError = useCallback((errorType: string, errorMessage: string, additionalProps?: Record<string, any>) => {
    track('Error Occurred', {
      error_type: errorType,
      error_message: errorMessage,
      ...additionalProps,
    });
  }, [track]);

  const identifyUser = useCallback((userId: string, userProperties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).mixpanel) {
      (window as any).mixpanel.identify(userId);
      if (userProperties) {
        (window as any).mixpanel.people.set(userProperties);
      }
    }
  }, []);

  return {
    track,
    trackButtonClick,
    trackFormSubmit,
    trackPageView,
    trackFeatureEngagement,
    trackPricingView,
    trackError,
    identifyUser,
  };
}

// Track page view on mount
export function usePageView(pageName?: string, additionalProps?: Record<string, any>) {
  const { trackPageView } = useMixpanel();

  useEffect(() => {
    trackPageView(pageName, additionalProps);
  }, [trackPageView, pageName, additionalProps]);
}

// Track button click with automatic text extraction
export function useTrackButton(buttonId?: string, additionalProps?: Record<string, any>) {
  const { trackButtonClick } = useMixpanel();

  return useCallback((buttonText: string) => {
    trackButtonClick(buttonText, buttonId, additionalProps);
  }, [trackButtonClick, buttonId, additionalProps]);
}

// Track form submission
export function useTrackForm(formName: string, formId?: string, additionalProps?: Record<string, any>) {
  const { trackFormSubmit } = useMixpanel();

  return useCallback(() => {
    trackFormSubmit(formName, formId, additionalProps);
  }, [trackFormSubmit, formName, formId, additionalProps]);
}
