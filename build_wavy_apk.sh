#!/bin/bash
set -e

# 1. Navigate to the project directory
cd "$(dirname "$0")/Metrolist"

# 2. Optional: Generate a keystore if it doesn't exist
KEYSTORE=~/keystore/wavy.jks
if [ ! -f "$KEYSTORE" ]; then
  echo "Generating keystore at $KEYSTORE..."
  mkdir -p ~/keystore
  keytool -genkey -v -keystore "$KEYSTORE" -keyalg RSA -keysize 4096 -validity 10000 -alias wavy \
    -storepass YourStorePwd -keypass YourKeyPwd -dname "CN=Wavy, OU=Dev, O=Wavy, L=City, S=State, C=US"
fi

# 3. Write signing config to ~/.gradle/gradle.properties if not present
GRADLE_PROPS=~/.gradle/gradle.properties
if ! grep -q "METROLIST_RELEASE_STORE_FILE" "$GRADLE_PROPS" 2>/dev/null; then
  echo "Configuring signing properties in $GRADLE_PROPS..."
  echo "METROLIST_RELEASE_STORE_FILE=$KEYSTORE" >> "$GRADLE_PROPS"
  echo "METROLIST_RELEASE_KEY_ALIAS=wavy" >> "$GRADLE_PROPS"
  echo "METROLIST_RELEASE_STORE_PASSWORD=YourStorePwd" >> "$GRADLE_PROPS"
  echo "METROLIST_RELEASE_KEY_PASSWORD=YourKeyPwd" >> "$GRADLE_PROPS"
fi

# 4. Build the release APK
./gradlew assembleRelease

APK_PATH="app/build/outputs/apk/release/app-release.apk"

if [ -f "$APK_PATH" ]; then
  echo "\n✅ Wavy APK built successfully: $APK_PATH"
  echo "\nTo install on your device:"
  echo "1. Copy $APK_PATH to your Android device."
  echo "2. Enable 'Install from unknown sources' in device settings."
  echo "3. Tap the APK to install."
else
  echo "❌ APK build failed. Check the Gradle output above."
  exit 1
fi