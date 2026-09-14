.PHONY: setup clean-ios

setup:
	@echo "🔄 Memulai proses reset dan instalasi..."
	@echo "🧹 Menghapus node_modules dan file cache..."
	rm -rf node_modules
	@echo "📦 Menginstal ulang dependency dengan Yarn..."
	yarn install
	@echo "🩹 Menjalankan patch-package / postinstall..."
	npx patch-package
	$(MAKE) clean-ios
	@echo "✅ Semua proses selesai!"

clean-ios:
	@echo "🗑️  Menghapus build iOS dan Pods..."
	rm -rf ios/Pods ios/Podfile.lock ios/build
	@echo "⚙️  Menjalankan Pod Install..."
	cd ios && pod install