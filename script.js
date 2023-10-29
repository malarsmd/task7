class UberPricing:
    base_fare = 2.0
    cost_per_mile = 1.5
    cost_per_minute = 0.2

    def _init_(self, distance, time):
        self.distance = distance
        self.time = time

    def calculate_price(self):
        fare = self.base_fare + (self.distance * self.cost_per_mile) + (self.time * self.cost_per_minute)
        return fare

# Example usage:
distance = 5.0  # in miles
time = 15  # in minutes
uber_ride = UberPricing(distance, time)
price = uber_ride.calculate_price()
print(f"The estimated Uber price for a {distance} mile, {time} minute ride is ${price:.2f}")