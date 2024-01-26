from ch11_ex_city_country import city_name


def test_city_country():
    """Do cities like 'Santiago, Chile' work?"""
    assert city_name('santiago', 'chile') == 'Santiago, Chile.'


def test_city_country_population():
    """Do population inputs work?"""
    assert (city_name('santiago', 'chile', population=5000000) ==
        'Santiago, Chile - population: 5000000.')