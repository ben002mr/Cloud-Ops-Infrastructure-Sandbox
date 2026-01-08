// Generic MongoDB script for Order & Invoice Troubleshooting
// Context: Locating Invoice PDF files by correlating Shopper IDs with Order IDs

// 1. Find all Order IDs for a specific Shopper within a time range
db.orders.find({
    "shopper_id": "SHOPPER_12345",
    "created_at": {
        "$gte": ISODate("2024-01-01T00:00:00Z"),
        "$lte": ISODate("2024-01-07T23:59:59Z")
    }
}, { "order_id": 1, "status": 1 }).sort({ "created_at": -1 });

// 2. Pinpoint the specific Invoice metadata/file path using the Order ID
db.invoices.findOne({
    "order_id": "ORDER_67890",
    "document_type": "PDF"
});
