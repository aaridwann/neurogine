.PHONY: setup clean-ios

setup:
	@echo "Lagi bersihin node_modules dulu..."
	rm -rf node_modules
	@echo "Install ulang dependency..."
	yarn install
	@echo "Nerapin patch ke node_modules..."
	npx patch-package
	@echo "Lanjut bersihin ios dan install pods..."
	$(MAKE) clean-ios
	@echo "Beres! Siap dipake."

clean-ios:
	@echo "Hapus Pods, Podfile.lock, dan folder build..."
	rm -rf ios/Pods ios/Podfile.lock ios/build
	@echo "Jalanin pod install..."
	cd ios && pod install