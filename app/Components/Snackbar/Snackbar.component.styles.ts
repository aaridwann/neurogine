import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        // Shadow / Elevation modern
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 6,
        borderLeftWidth: 5,
    },
    // Border aksen tiap tipe
    successBorder: { borderLeftColor: '#10B981' },
    errorBorder: { borderLeftColor: '#EF4444' },
    infoBorder: { borderLeftColor: '#3B82F6' },

    // Icon Badge bulat
    badge: {
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    successBadge: { backgroundColor: '#D1FAE5' },
    errorBadge: { backgroundColor: '#FEE2E2' },
    infoBadge: { backgroundColor: '#DBEAFE' },

    badgeText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    textContainer: {
        flex: 1,
    },
    titleText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 2,
    },
    messageText: {
        fontSize: 12,
        color: '#6B7280',
    },
});

export default styles