# Troubleshoot Adobe Experience Platform Assurance

If you are having trouble getting Assurance to work, please see suggestions under the following issue topics to resolve commonly encountered issues.

To enable smoother implementation and to discover any potential issues, ensure you have SDK logging turned on per [Enable Debug Logging](../getting-started/enable-debug-logging.md) in the Getting Started section.

You may change SDK log levels using the [`setLogLevel`](../mobile-core/api-reference.md#logging) API.

## On-device, app issues

### QR code does not open app

* Access the link directly. Copy the link from **Session Details**. Paste it in the browser address bar of the device to open it. If it does not open, please see the section [App will not open link](#app-does-not-open-link).
* Use a different QR reader. For iOS 11 or greater, use the Photo app to read the QR code.

### App does not open link

* Verify the deep link implementation is configured correctly in the app.
  * **Android:** Deep Links (App Links)
    * [Create Deep Links to App Context](https://developer.android.com/training/app-links/deep-linking)
  * **iOS:** Custom URL Scheme or Universal Links
    * [Defining a Custom URL Scheme for Your App](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app)
    * [Supporting Universal Links in Your App](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/supporting_universal_links_in_your_app)

<InlineAlert variant="info" slots="text"/>

For Android, the `startSession` API does not need to be explicitly called. For iOS, use the API as described in [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md#implement-aep-assurance-session-start-apis-ios-only).

### Authentication overlay appears, but app fails to connect

* Ensure internet connectivity of the device through the device web browser.
* If the app has never successfully connected to the Assurance service, ensure it is set up for Assurance correctly. See instructions on installing the [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md#install-the-assurance-extension-in-the-data-collection-ui) SDK library.
* Verify the session matches the link and is input correctly for the expected session. See [Log message "OrgID information is not available"](../platform-assurance-sdk/common-issues.md#orgid-information-is-not-available) (this is uncommon and relevant only if you have access to more than one ORG instance).

### Adobe Analytics Debugging

**Post Processing Status - No Debug Flag**

In your Analytics Events view, if events fail with the Post-Processed Status "No Debug Flag", your current Adobe Analytics or Assurance SDK version might not support the Analytics Debugging feature.
Please upgrade the Adobe Analytics and Assurance SDK extensions to the latest versions to resolve this problem.

| Minimum Version Requirement | iOS | Android |
| --------------------------- | --- | ------- |
| Adobe Analytics | > 2.4.0 | > 1.2.6 |
| Assurance | > 1.0.0 | > 1.0.0 |

### React Native MobileCore and AEPAssurance compatibility

| AEP Assurance Version | Mobile Core Version | Install Instruction |
| --------------------- | ------------------- | ------------------- |
| react-native-aepassurance v2.x.x | [react-native-acpcore](https://www.npmjs.com/package/@adobe/react-native-acpcore) | npm install @adobe/react-native-aepassurance@^2.0.0 <br/>npm install @adobe/react-native-acpcore |
| react-native-aepassurance v3.x.x | [react-native-aepcore](https://www.npmjs.com/package/@adobe/react-native-aepcore) | npm install @adobe/react-native-aepassurance@^3.0.0 <br/>npm install @adobe/react-native-aepcore |

If you are using `react-native-acpcore` with AEPAssurance, the React Native application can fail to build with one of the following error messages:

```
RCTAEPAssurance:  Fatal error: Module 'AEPAssurance' not found
```

or

```
AppDelegate: AEPAssurance.h file not found
```

**Solution**

If that occurs, please downgrade your `react-native-aepassurance` using the following npm command:

```
npm install @adobe/react-native-aepassurance@^2.0.0
```

This error occurs because the `react-native-acpcore` extension is **only** compatible with `react-native-aepassurance` versions 2.x.x and below.
