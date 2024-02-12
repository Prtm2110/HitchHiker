import mongoose, {Schema, Types, models} from "mongoose";

rideScheme = Schema({
    pickupAdd: {
        type: String,
        reuired: true,
    },
    drowOffAdd: {
        type: String,
        reuired: true,
    },
    passengers: {
        type: [Schema.Types.ObjectId],
        ref: "User"
    },
    pricePerSeat: {
        type: Number,
        required: true
    },
    driver: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    active: {
        type: Boolean,
        required: true
    }
})


export const ride = mongoose.model("Ride", rideScheme)