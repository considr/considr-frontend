angular.module('consider-me')
    .factory('campaignsData', function (xhr, $q) {

        return {
            getCampaigns: function (countryId) {
                var data = [
                    {
                        "draft": true,
                        "active": false,
                        "last_updated": "2017-05-13T11:48:03.158Z",
                        "creation_date": "2017-05-13T11:48:03.158Z",
                        "campaign_picture_path": "http:",
                        "campaign_code": "001",
                        "creator_campaign": "Test1",
                        "title": "First Campaign",
                        "description": "This is the first campaign's description",
                        "reason": "This is the reason why",
                        "script": "This is the script",
                        "times_requested": 0,
                        "is_parliamentarians_predefined": true,
                        "is_federal_level": true,
                        "id": "59218f4e8eb5dc329cb6dbb0"
                    },
                    {
                        "draft": true,
                        "active": false,
                        "last_updated": "2017-05-13T11:48:03.158Z",
                        "creation_date": "2017-05-13T11:48:03.158Z",
                        "campaign_picture_path": "http:",
                        "campaign_code": "002",
                        "creator_campaign": "Test2",
                        "title": "Second Campaign",
                        "description": "This is the second campaign's description",
                        "reason": "This is the reason why",
                        "script": "This is the script",
                        "times_requested": 0,
                        "is_parliamentarians_predefined": false,
                        "is_federal_level": false,
                        "id": "59218f4e8eb5dc329cb6dbb1"
                    },
                    {
                        "draft": false,
                        "active": true,
                        "campaign_picture_path": "http:",
                        "campaign_code": "003",
                        "creator_campaign": "Change.org",
                        "title": "Keine Privatisierung der Autobahnen!",
                        "description": "Auf uns rollt eine Privatisierungswelle per Grundgesetz zu. Die Bundesregierung will per Grundgesetzänderung in 13 Artikeln für die Privatisierung der Autobahnen, der Infrastruktur und sogar der Schulen die Tür öffnen! Das dürfen wir nicht zulassen! Da es zu einer Grundgesetzänderung eine Zweidrittelmehrheit benötigt wird, möchte die Regierung vor der Bundestagswahl dieses Vorhaben durchboxen. Die große Koalition hat jetzt noch die notwendige Zweidrittelmehrheit. Die Abstimmung wurde aufgrund unseres großen Drucks auf Anfang Juni verschoben.",
                        "reason": "This is the reason why",
                        "script": "Rufen wir die zuständigen Abgeordneten von Union und SPD und überzeugen wir sie im persönlichen Gespräch, dass eine Privatisierung der Autobahn nicht zu machen ist. Machen Sie auf die Mängel aufmerksam. Wenn Sie nur Mitarbeiter erreichen: kein Problem. Bringen Sie Ihre Kritik trotzdem an. Wenn tausende Menschen anrufen, wird ihre Stimme nicht ungehört bleiben. Hier die Argumente gegen die Autobahnprivatisierung (Quelle und weitere Informationen auf: Gemeingut.org. \n 1. In Grundgesetz Art 90 soll künftig stehen: „Die Verwaltung der Bundesautobahnen wird in Bundesverwaltung geführt. Der Bund kann sich zur Erledigung seiner Aufgaben einer Gesellschaft privaten Rechts bedienen.“ Die Umwidmung zu einem privatwirtschaftlichen Unternehmen installiert das Prinzip ‚Gewinnmaximierung vor Gemeinnutzen‘. 2. Durch die Privatisierung entstehen der Allgemeinheit erhebliche Kosten. Diese resultieren vor allem aus hohen Zinsen für private Kredite und aus den geheimen ÖPP-Verträgen (ÖPP = öffentlich-private Partnerschaften), in denen Banken und Versicherungen über 30 Jahre eine hohe Rendite garantiert wird. 3. Die neue Autobahn-GmbH wäre der parlamentarischen Kontrolle entzogen. Sie könnte dann nach eigenem Gutdünken beispielsweise ÖPP als Standardmodell einsetzen. ÖPPs sind teuer, intransparent und können nicht demokratisch gesteuert und kontrolliert werden. 4. Die Autobahn-GmbH darf künftig private – und damit sehr teure – Kredite aufnehmen. Diese Schulden bilden einen Schattenhaushalt. Damit sind die Schulden aber nicht weg. Sie müssen samt Zinsen zurückgezahlt werden – über Steuern, Maut und Leistungskürzungen. 5. Mit der Privatisierung wird die Daseinsvorsorge abgebaut und in die Hände von Privaten getrieben. Besonders betroffen sind die Beschäftigten in den Straßenbauverwaltungen und Straßenmeistereien. Tarifgebundene Stellen fallen weg, und den Ländern und Kommunen geht das Wissen über Bau und Erhalt von Autobahnen dauerhaft verloren. 6. Private Investoren wollen schnell viel Geld verdienen, das geht am besten mit dem Autobahnneubau. Es ist absehbar, dass daran großes Interesse bestehen wird. Die Autobahn-GmbH darf jenseits der Schuldenbremse Kredite aufnehmen, ökologische Verkehrsträger müssen die Schuldenbremse einhalten. Dem Verkehrssektor droht daher eine gravierende Strukturveränderung zu Lasten ökologischer Verkehrswende.",
                        "times_requested": 0,
                        "is_parliamentarians_predefined": true,
                        "is_federal_level": true,
                        "id": "592199677fd05606dc6d4350"
                    }
                ];
                // return $q.when(data);
                return xhr.call({
                    url: 'api/Campaigns'
                });
            },
        };
    });
