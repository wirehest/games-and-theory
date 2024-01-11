#def city_name(city, country):
#    """11-1: Formats city and country into a single string."""
#    city_country = f"{city}, {country}"
#    return city_country.title()

def city_name(city, country, population=''):
    """11-2: Formats city and country into a single string."""
    pop_str = f" - population: {population}" if population else ""
    city_country = f"{city}, {country}"
    return city_country.title() + pop_str + "."