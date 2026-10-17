// German. `ui` = strings keyed by data-i18n / I18N.t(); `data` = text-only overlays on the English globals
// (same shape, by array index; anything left out stays English: grades, hrefs, tech names, RGU module names).
window.I18N_PACKS = window.I18N_PACKS || {};
window.I18N_PACKS.de = {
    ui: {
        'meta.title': 'Matus Illith — Softwareentwickler, vom Maschinencode bis zum Business Case',
        'meta.desc': 'Matus Illith: Softwareentwickler, der das Programmieren vom Maschinencode aus über Systeme, Sicherheit und Cloud gelernt hat und darum herum Produkte und Unternehmen aufbaut. Gesucht: eine Einstiegsstelle als Softwareentwickler oder Product Owner.',
        'skip': 'Zum Inhalt springen',
        'nav.label': 'Abschnitte',
        'nav.gap': 'Die Lücke',
        'nav.profile': 'Profil',
        'nav.ventures': 'Ventures',
        'nav.method': 'Methode',
        'nav.proof': 'Belege',
        'nav.stack': 'Der Stack',
        'nav.projects': 'Projekte',
        'nav.fit': 'Wie ich arbeite',
        'counter.title': 'Mit den Pfeiltasten links und rechts blättern Sie durch die Folien',
        'lang.label': 'Sprache',
        'lens.label': 'Wählen Sie, welche Seite Sie lesen möchten',
        'lens.business': 'Business',
        'lens.build': 'Technik',
        'talk': 'Lassen Sie uns sprechen',
        's.cover': 'Start',
        's.problem': 'Die Lücke',
        's.profile': 'Profil',
        's.ventures': 'Ventures',
        's.method': 'Unternehmertum',
        's.proof': 'Belege',
        's.stack': 'Der Stack',
        's.side': 'Engineering-Projekte',
        's.fit': 'Wie ich arbeite',

        'cover.h1': 'Vom Maschinencode zum Business Case.',
        'cover.lede.build': 'Am meisten zu Hause bin ich in Java und C. Programmieren habe ich von der Maschine aufwärts gelernt (Turingmaschinen, Logikschaltungen, Speicher von Hand), danach über Betriebssysteme, Sicherheit, Cloud und Web.',
        'cover.lede.business': 'Ich bin Softwareentwickler und baue das Produkt und das Geschäft drumherum: Ich spreche mit den Menschen, die es nutzen werden, entscheide, was zuerst gebaut wird, und schreibe den Code dann selbst.',
        'cover.see.stack': 'Sehen Sie, was ich gelernt habe <span aria-hidden="true">↓</span>',
        'cover.see.ventures': 'Zu den Ventures <span aria-hidden="true">↓</span>',
        'cover.meta': 'Matus Illith · BSc (Hons) Computer Science, Robert Gordon University, Aberdeen · Abschluss 2027 · auf der Suche nach einer Einstiegsstelle als Softwareentwickler oder Product Owner',
        'cover.hint.build': 'Wechseln Sie zu Business für die Arbeit, die ich mit und für Unternehmen gemacht habe.',
        'cover.hint.business': 'Wechseln Sie zu Technik für das Engineering und die Ausbildung dahinter.',

        'problem.h2': 'Die meisten Produkte bleiben in der Lücke zwischen dem, was das Geschäft braucht, und dem, was die Technik baut, stecken.',
        'problem.big': 'Jemand muss diese Lücke besetzen: die Menschen verstehen, die das Produkt nutzen werden, und das System gut genug kennen, um zu wissen, was günstig und was teuer ist. Darauf bereite ich mich vor, und das tue ich in meinen eigenen Projekten.',

        'profile.alt': 'Porträt von Matus Illith',
        'profile.h2': 'Eine Person auf beiden Seiten des Tisches.',
        'profile.1': '<strong>Discovery.</strong> Elev8 gemeinsam mit Coaches in Aberdeen und Bratislava aufgebaut.',
        'profile.2': '<strong>Roadmaps.</strong> Erst Web, dann PC, dann Mobile: bewusst so gestaffelt.',
        'profile.3': '<strong>Führung.</strong> Das technische Team bei einem Prototyp für ein Ärzteportal im HealthTech-Bereich geleitet.',

        'ventures.h2': 'Zwei Dinge, die ich mit echten Menschen gebaut habe.',

        'method.h2': 'Die Methode hinter den Ventures.',
        'method.big': 'Pirates Studies, mein Modul im 3. Studienjahr an der Robert Gordon University, basiert auf dem Entrepreneurship-Kurs des MIT und wurde vom Dekan der Fakultät unterrichtet, der am MIT studiert hat. Note: A.',
        'method.1': '<strong>Chancen.</strong> Neue Geschäftschancen erkennen und bewerten: Marktbedürfnisse und Innovationspotenzial erfassen.',
        'method.2': '<strong>Kunden.</strong> Kundenbedürfnisse verstehen, dann ein überzeugendes Nutzenversprechen beziffern und vermitteln.',
        'method.3': '<strong>Businesspläne.</strong> Überzeugende Businesspläne erstellen und Startups skalieren, mit Strategie, operativer Planung und nachhaltigem Wachstum.',
        'method.4': '<strong>Prototyping.</strong> Durch iterative Entwicklung von Low-Fidelity- zu High-Fidelity-Prototypen gelangen.',

        'proof.h2': 'Die Zahlen dahinter.',
        'proof.1': 'Befragte Coaches',
        'proof.2': 'Befragte Fitnessstudio-Leiter',
        'proof.3': 'Produkte von der Idee bis zum fertigen Ergebnis',
        'proof.v1': 'Etwa 15',
        'proof.v2': 'Etwa 20',
        'proof.v3': 'Etwa 6',

        'stack.h2': 'Jede Ebene des Stacks, eine Person.',

        'fiit.h2': 'Wo ich programmieren gelernt habe: FIIT, Bratislava.',
        'fiit.big': 'BSc Informatik und Informationswissenschaft, 2022–23, an der Slowakischen Technischen Universität. Mathematik und Theorie, Technische Informatik und Programmierung in C und Java. Öffnen Sie einen Kurs, um zu sehen, was ich gelernt habe.',
        'course.details': 'Alle Kursdetails <span aria-hidden="true">→</span>',

        'rgu.h2': 'Dann Systeme, Sicherheit und KI an der Robert Gordon University.',
        'rgu.big': 'BSc (Hons) Computer Science, Aberdeen, 2023–2027. Öffnen Sie einen Kurs, um zu sehen, was ich gelernt habe und welche Note ich erhielt.',

        'side.h2': 'Dinge, die ich gebaut habe, um zu verstehen, wie es funktioniert.',

        'fit.h2': 'Wie ich arbeite.',
        'fit.1': '<strong>Freitauchen und Freeriden.</strong> Ruhe unter Druck und Respekt vor dem Risiko, das man nicht sieht.',
        'fit.2': '<strong>Das Fitnessstudio.</strong> Langweilige Beständigkeit schlägt gelegentliches Heldentum.',
        'fit.3': '<strong>Gitarre, jetzt Ukulele.</strong> Ich lerne immer ein neues Instrument, am Anfang schlecht, mit Absicht.',

        'ask.h2.build': 'Sie suchen einen Softwareentwickler, der das Produkt mitdenkt?',
        'ask.h2.business': 'Sie suchen einen Product Owner, der auch bauen kann?',
        'ask.big': 'Ich lebe zwischen Großbritannien und der Slowakei. Vernetzen Sie sich auf LinkedIn mit mir, dann vereinbaren wir ein Gespräch.',
        'ask.linkedin': 'Schreiben Sie mir auf LinkedIn',

        // course pages
        'course.back': '<span aria-hidden="true">←</span> Zurück zur Präsentation',
        'course.yearnav': 'Zu einem Studienjahr springen',
        'rgu.page.title': 'Robert Gordon University — BSc (Hons) Computer Science — Matus Illith',
        'rgu.page.desc': 'Jedes Modul von Matus Illiths BSc (Hons) Computer Science an der Robert Gordon University in Aberdeen: was er gelernt hat, Noten und Ergebnisse.',
        'rgu.page.meta': 'BSc (Hons) Computer Science · Aberdeen · 2023–2027',
        'rgu.page.big': 'Ein vierjähriger Honours-Studiengang, der Theorie mit praktischen Fähigkeiten in Softwareentwicklung, Systementwurf und Rechnerarchitektur verbindet. Ich bin im letzten Jahr.',
        'rgu.page.track': 'Studienfortschritt',
        'rgu.page.y1': 'Jahr 1<br>Grundlagen',
        'rgu.page.y2': 'Jahr 2<br>Entwicklung',
        'rgu.page.y3': 'Jahr 3',
        'rgu.page.y4': 'Jahr 4<br>Abschlussjahr<br><span class="status">Hier bin ich</span>',
        'rgu.page.next': 'Wo es begann: FIIT, Bratislava <span aria-hidden="true">→</span>',
        'fiit.page.title': 'FIIT, Slowakische Technische Universität — Matus Illith',
        'fiit.page.desc': 'Die Kurse und Projekte aus Matus Illiths Jahr an der FIIT der Slowakischen Technischen Universität in Bratislava, wo er das Programmieren von der Maschine aufwärts gelernt hat.',
        'fiit.page.h1': 'FIIT, Slowakische Technische Universität',
        'fiit.page.meta': 'BSc Informatik und Informationswissenschaft · Bratislava · 2022–23',
        'fiit.page.big': 'Ein Jahr, in dem theoretische Informatik mit praktischer Programmierung, Mathematik und Technischer Informatik verbunden wurde. Ich habe es abgeschlossen und bin dann an die Robert Gordon University in Aberdeen gewechselt, um in der Informatik weiterzumachen.',
        'fiit.page.next': 'Weiter: Robert Gordon University, Aberdeen <span aria-hidden="true">→</span>',

        // labels built in js/deck.js and js/course.js
        'js.tbd': 'TBD',
        'js.problem': 'Problem',
        'js.users': 'Nutzer',
        'js.decisions': 'Entscheidungen',
        'js.outcome': 'Ergebnis',
        'js.builtwith': 'Gebaut mit',
        'js.grade': 'Note',
        'js.here': 'Hier bin ich',
        'js.courses': 'Kurse',
        'js.projects': 'Schlüsselprojekte',

        // project-details.html, secret-page.html
        'legacy.logo': 'Portfolio',
        'legacy.nav.about': 'Über mich',
        'legacy.nav.education': 'Ausbildung',
        'legacy.nav.past': 'Frühere Projekte',
        'legacy.nav.current': 'Aktuelle Projekte',
        'legacy.nav.interests': 'Interessen',
        'legacy.nav.contact': 'Kontakt',
        'legacy.rights': 'Alle Rechte vorbehalten.',
        'pd.title': 'Personal Trainer CRM - Projektdetails',
        'pd.back': 'Zurück zu den aktuellen Projekten',
        'pd.showcase': 'Projektpräsentation',
        'pd.description': 'Projektbeschreibung',
        'pd.p1': 'Dieses CRM wird eine schlanke, webbasierte Plattform für Personal Trainer und Online-Coaches, mit der sich Kunden, Termine und Kommunikation mühelos an einem Ort verwalten lassen. Verfolgen Sie Ziele und Fortschritte mit visuellen Dashboards, automatisieren Sie Buchungen und Erinnerungen und senden Sie personalisierte Nachrichten ohne Verwaltungsaufwand. Wir starten als responsive Web-App und entwickeln uns zu einer schnellen, grundsoliden PC-Anwendung und später zu weit mehr. <a href="http://elev8coaching.tech/" class="hidden-link">Mehr auf unserer Website</a>',
        'pd.p2': 'Bei dieser Reise geht es nicht nur um bessere Leistung, sondern um Wahlfreiheit.',
        'pd.p3': 'Ich programmiere derzeit und baue meinen eigenen Server, um die Software hosten und testen zu können, im Grunde eine interne Alpha-Testphase.',
        'pd.p4': 'In diesem Projekt habe ich mit Coaches in Aberdeen und Bratislava zusammengearbeitet.',
        'pd.features': 'Zu den wichtigsten Funktionen gehören:',
        'pd.f1': 'Terminplanung und -verwaltung',
        'pd.f2': 'Verfolgung des Kundenfortschritts',
        'pd.f3': 'Erstellung und Zuweisung von Trainingsplänen',
        'pd.f4': 'Integriertes Nachrichtensystem',
        'pd.f5': 'Zahlungsabwicklung und Abo-Verwaltung',
        'pd.f6': 'Mobile App für den Zugriff unterwegs',
        'pd.tech': 'Technologie-Stack',
        'pd.t1': 'Frontend-Framework für Webanwendungen zum Aufbau der Benutzeroberfläche',
        'pd.t2': 'Backend-Dienste einschließlich Authentifizierung, Datenbank und Hosting',
        'pd.t3': 'Backend-Verarbeitung und Datenanalyse',
        'pd.t4': 'Relationale Datenbank zur Speicherung strukturierter Daten',
        'pd.t5': 'API-Architektur für die Kommunikation zwischen Client und Server',
        'pd.t6': 'Cloud-Infrastruktur für Server, Rechenleistung, Speicher und Deployments',
        'pd.t7': 'Anbindung der Zahlungsabwicklung',
        'pd.future': 'Künftige Arbeit',
        'pd.m1.h': 'Beta + Entwicklung der mobilen App',
        'pd.m1.p': 'Parallele Arbeit am Kern-Beta-Release und an begleitenden mobilen Apps für iOS und Android.',
        'pd.m2.h': 'Erfassung von Übungsdaten',
        'pd.m2.p': 'Aufbau einer umfassenden Bibliothek mit Lehrvideos, die die richtige Technik und Variationen von Übungen zeigen. So können Personal Trainer ihren Kunden einfach professionelle Demonstrationen weitergeben, statt eigene aufzunehmen.',
        'pd.m3.h': 'Vollständige Veröffentlichung',
        'pd.m3.p': 'Offizieller Start mit vollständigem Funktionsumfang und einem Marktplatz für Trainer',
        'pd.progress': 'Aktueller Stand',
        'pd.complete': '20 % abgeschlossen',
        'pd.progress.p': 'Derzeit in der Prototyping-Phase mit Schwerpunkt auf UI-Design und Entwicklung des Datenbankschemas.',
        'sp.title': 'Geheime Seite',
        'sp.back': 'Zurück zu den Projektdetails',
        'sp.title.h': 'Eine neue Ära der Software',
        'sp.sub': 'Wir verändern Online-Coaching durch intelligente, leistungsstarke Technologie.'
    },

    data: {
        EDU_FIIT: [
            {
                name: 'Analysis',
                desc: 'Fortgeschrittene mathematische Konzepte wie Grenzwerte, Ableitungen, Integrale und ihre Anwendungen in der Informatik',
                learned: 'Ich habe ein solides Fundament in der Analysis einer Variablen und der einführenden mehrdimensionalen Analysis gelegt. Differentiation und Integration habe ich auf Optimierungs- und Analyseprobleme angewendet, wie sie in der Informatik üblich sind.',
                outcomes: ['Grenzwerte und Stetigkeit', 'Ableitungen', 'Integrale', 'Optimierung', 'Grundlagen von Reihen', 'Angewandte Mathematik für die Informatik']
            },
            {
                name: 'Algebra',
                desc: 'Lineare Algebra, Matrizen, Vektorräume und algebraische Strukturen, die für Anwendungen in der Informatik wichtig sind',
                learned: 'Behandelt wurden lineare Algebra und diskrete Strukturen, die in Grafik, maschinellem Lernen und theoretischer Informatik gebraucht werden, mit Fokus darauf, über Systeme und Transformationen zu argumentieren.',
                outcomes: ['Matrizen', 'Vektorräume', 'Eigenwerte', 'Gleichungssysteme', 'Gruppen und Ringe (Einführung)', 'Beweistechniken']
            },
            {
                name: 'Ingenieurmethoden',
                desc: 'Problemlösungsansätze und Methoden aus den Ingenieurdisziplinen mit Anwendungen im Computing',
                learned: 'Ich habe systematische Ingenieurmethoden, Abschätzungen und Dokumentation geübt, mit denen technische Probleme im Computing analysiert und gelöst werden.',
                outcomes: ['Problemformulierung', 'Modellierung', 'Abschätzung', 'Technische Berichte', 'Teamarbeit']
            },
            {
                name: 'Prozedurale Programmierung',
                desc: 'Grundlagen prozeduraler Programmierparadigmen, Kontrollstrukturen und Algorithmenimplementierung (C)',
                learned: 'Ich habe maschinennahe Programmierung in C, Speicherverwaltung und Debugging gelernt, indem ich klassische Algorithmen mit prozeduralen Mustern implementiert habe.',
                outcomes: ['Programmiersprache C', 'Zeiger und Speicher', 'Kontrollfluss', 'Datenstrukturen (C)', 'Debugging']
            },
            {
                name: 'Grundlagen der Technischen Informatik',
                desc: 'Rechnerarchitektur, Hardwarekomponenten, digitale Logik und Prinzipien des Systementwurfs (Logisim)',
                learned: 'Ich habe digitale Logik und grundlegende Architektur erkundet und Schaltungen in Logisim entworfen und simuliert, um Berechnung auf Hardwareebene zu verstehen.',
                outcomes: ['Digitale Logik', 'Kombinatorische Schaltungen', 'Sequentielle Schaltungen', 'Logisim', 'CPU-Grundlagen']
            },
            {
                name: 'Datenstrukturen und Algorithmen',
                desc: 'Implementierung und Analyse grundlegender Datenstrukturen und Algorithmen zur effizienten Problemlösung (Java)',
                learned: 'Ich habe Listen, Stacks, Queues, Bäume und gängige Algorithmen in Java implementiert und die Komplexität mit der O-Notation bewertet, um performancebewusste Entscheidungen zu treffen.',
                outcomes: ['Java', 'Sortieren und Suchen', 'Bäume und Graphen', 'Big-O-Analyse', 'Algorithmenentwurf']
            },
            {
                name: 'Theoretische Grundlagen der Informatik',
                desc: 'Grundlegende Theorien der Berechnung, Automatentheorie, formale Sprachen und Berechnungskomplexität (TuringMachine, Ram)',
                learned: 'Ich habe formale Berechnungsmodelle und Komplexität studiert und kleine Maschinen und Simulationen implementiert, um die Berechenbarkeit besser zu verstehen.',
                outcomes: ['Automaten', 'Formale Sprachen', 'Turingmaschinen', 'RAM-Modell', 'Grundlagen der Komplexität']
            },
            {
                name: 'Objektorientierte Programmierung',
                desc: 'Prinzipien des objektorientierten Entwurfs, Vererbung, Polymorphie, Implementierung, Entwurfsmuster und Multithreading (Java)',
                learned: 'Ich habe OOP in Java geübt, einschließlich Klassenentwurf, Entwurfsmustern und einer Einführung in Nebenläufigkeit, um wartbare Anwendungen zu bauen.',
                outcomes: ['OOP (Java)', 'Entwurfsmuster', 'UML-Grundlagen', 'Collections', 'Multithreading (Einführung)']
            }
        ],

        EDU_FIIT_PROJECTS: [
            {name: 'Sequentielle Schaltung', desc: 'Ich habe eine sequentielle Logikschaltung in LogiSim gebaut und dabei Prinzipien der digitalen Logik und der Rechnerarchitektur angewendet'},
            {name: 'Maschinennahe Programmierung', desc: 'Ich habe eigene verkettete Listen und Array-Listen in C sowie RAM-Simulationen erstellt, um Speicherverwaltung zu verstehen'},
            {name: 'Java-Anwendungsentwicklung', desc: 'Ich habe objektorientierte Anwendungen in Java mit Entwurfsmustern und nebenläufiger Programmierung erstellt'},
            {name: 'Turingmaschine', desc: 'Ich habe ein Variationen-Kombinatorik-System als Turingmaschine entwickelt, das Prinzipien der Berechnungstheorie und algorithmische Problemlösung zeigt'}
        ],

        // RGU module names stay as the official English titles.
        EDU_RGU: [
            {
                y: 'Jahr 1 · Grundlagen',
                courses: [
                    {desc: 'Grundlagen der Programmierlogik, von Algorithmen und Problemlösungsansätzen (JavaScript).'},
                    {desc: 'Techniken zur Analyse und Lösung von Rechenproblemen durch strukturierte Ansätze (R)'},
                    {desc: 'Praktische Erkundung von Mikrocontrollern, Hardware-Schnittstellen und den Grundlagen der Arduino-Programmierung'},
                    {desc: 'Prinzipien nutzerzentrierten Designs und kreativer Problemlösung für digitale Produkte'},
                    {desc: 'Entwicklung responsiver Weboberflächen mit HTML, CSS und JavaScript'},
                    {desc: 'Grundlegende mathematische Konzepte für die Informatik, darunter diskrete Mathematik und Logik (Python)'},
                    {desc: 'Prinzipien der objektorientierten Programmierung und Anwendungsentwicklung (Java)'}
                ]
            },
            {
                y: 'Jahr 2 · Entwicklung',
                courses: [
                    {
                        desc: 'Prinzipien des Betriebssystementwurfs, Virtualisierung, Prozessverwaltung, Speicherzuweisung, Betriebssystem-Skripting und Docker.',
                        learned: 'Behandelt wurden die Prinzipien moderner Betriebssysteme: Prozess- und Speicherverwaltung, Dateisysteme und Ressourcenplanung, sowohl eigenständig als auch in Cloud-Umgebungen. Ich habe mit Virtualisierungsplattformen, Containern wie Docker und Cloud-Infrastrukturen gearbeitet, um Bereitstellung, Überwachung und Wartung im großen Maßstab zu verstehen. Geübt habe ich Skripting auf Betriebssystemebene (Bash unter UBUNTU), Automatisierung (cron), Backup-Strategien sowie Sicherheit und Zugriffskontrolle, um echte Server und virtuelle Instanzen sicher zu verwalten.',
                        outcomes: ['Bash-Skripting', 'Cron-Jobs', 'Virtualisierung', 'Cloud-Verwaltung', 'Docker', 'Prozessverwaltung', 'Speicherverwaltung', 'Sicherung und Wiederherstellung', 'Betriebssystemsicherheit und Zugriffskontrolle']
                    },
                    {
                        desc: 'Fortgeschrittene Konzepte der objektorientierten Programmierung und Umsetzung von Entwurfsmustern in Java',
                        learned: 'Ich habe meine OOP-Kenntnisse vertieft, indem ich Abstraktion, Vererbung, Polymorphie, Interfaces und Generics in Java angewendet habe. Den gesamten SDLC von den Anforderungen bis zur Wartung habe ich mit OO-Entwurfsprinzipien und Mustern durchlaufen, mit Fokus auf saubere Architektur, Skalierbarkeit und Testbarkeit.',
                        outcomes: ['OOP (Java)', 'SDLC', 'Entwurfsmuster', 'UML', 'Unit-Tests', 'Codequalität', 'Refactoring', 'Debugging']
                    },
                    {
                        desc: 'Durchgängige Webanwendungsentwicklung mit Frontend, Backend und Datenbankanbindung (Node.js, RESTful API, EJS, MongoDB)',
                        learned: 'Ich habe in sich geschlossene Full-Stack-Webanwendungen gebaut, mit Node.js auf dem Server, RESTful APIs, EJS für serverseitige Templates und MongoDB zur Speicherung. Die Anwendungen habe ich mit sauberem Routing und Authentifizierung strukturiert und den Datenfluss zwischen Client, Server und Datenbank gesteuert.',
                        outcomes: ['Node.js', 'RESTful-API-Entwurf', 'EJS-Templates', 'MongoDB', 'HTTP-Routing', 'Middleware', 'Grundlagen von Authentifizierung und Sicherheit']
                    },
                    {
                        desc: 'Gemeinsames Teamprojekt zur Lösung realer Probleme mit Methoden der Softwareentwicklung',
                        learned: 'Im Team haben wir für einen echten Kundenpartner eine Softwarelösung geliefert und dabei Ingenieurmethoden, Kommunikation und Projektmanagement angewendet. Wir haben den Prototyp eines Ärzteportals geliefert und auf Basis von Feedback weiterentwickelt.',
                        outcomes: ['Anforderungserhebung', 'Agile Lieferung', 'Teamzusammenarbeit', 'Versionskontrolle', 'Prototyping', 'Validierung', 'Kommunikation', 'Dokumentation', 'Präsentationen']
                    },
                    {
                        desc: 'Fortgeschrittene Datenbankkonzepte, Normalisierung, Abfrageoptimierung, Sicherheit und Datenbankmanagementsysteme (Microsoft SQL)',
                        learned: 'Ich habe fortgeschrittene relationale Konzepte erkundet: Normalisierung, Indizierung, Abfrageoptimierung und Sicherheit. Der Schwerpunkt lag auf Microsoft SQL Server für Entwurf und Administration, einschließlich Einrichtung und Konfiguration.',
                        outcomes: ['Schemaentwurf', 'SQL-Abfragen', 'Normalisierung', 'Abfrageoptimierung', 'Indizierung', 'SQL-Server-Administration', 'Datenbanksicherheit', 'Sicherung und Wiederherstellung']
                    },
                    {
                        desc: 'Techniken für Forschung in der Informatik, einschließlich Literaturrecherche und Methodik',
                        learned: 'Einführung in Forschungstechniken der Informatik. Ich habe Literaturrecherchen, das Formulieren von Forschungsfragen und die Wahl geeigneter Methoden für empirische oder theoretische Studien geübt.',
                        outcomes: ['Literaturrecherche', 'Forschungsfragen', 'Qualitative Methoden', 'Quantitative Methoden', 'Kritische Bewertung', 'Wissenschaftliches Schreiben', 'Zitieren', 'Forschungsethik']
                    },
                    {
                        desc: 'Implementierung und Analyse grundlegender Datenstrukturen und Algorithmen zur effizienten Problemlösung (Java)',
                        learned: 'Ich habe grundlegende Datenstrukturen und Algorithmen in Java implementiert und analysiert, um Probleme effizient zu lösen, und mit der O-Notation Zeit- und Speicherbedarf verglichen.',
                        outcomes: ['Datenstrukturen (Java)', 'Sortieren', 'Suchen', 'Big-O-Analyse', 'Algorithmenentwurf', 'Optimierung', 'Problemzerlegung', 'Performancebewusstes Programmieren']
                    }
                ]
            },
            {
                y: 'Jahr 3',
                courses: [
                    {
                        desc: 'Fortgeschrittene Programmiertechniken für parallele Ausführung und Synchronisation in Multithreading-Anwendungen',
                        learned: 'Ich habe fortgeschrittene Techniken zum Bau von Multithreading- und Parallelanwendungen studiert, die moderne Hardware effizient nutzen. Behandelt wurden Synchronisation, Race Conditions, Deadlocks und threadsicherer Entwurf für zuverlässige nebenläufige Systeme.',
                        outcomes: ['Multithreading', 'Nebenläufigkeitsmodelle', 'Locks und Semaphoren', 'Vermeidung von Race Conditions', 'Umgang mit Deadlocks', 'Threadsicherer Entwurf', 'Performance-Profiling']
                    },
                    {
                        desc: 'Gemeinsame Projektarbeit mit Studierenden anderer Fachrichtungen zur Lösung komplexer Probleme',
                        learned: 'Ich habe mit Studierenden anderer Fachrichtungen komplexe, reale Probleme in einem agilen, projektbasierten Ansatz gelöst. Ich habe zu einem kundennahen Prototyp beigetragen und dabei Informatik mit Design- und Business-Input verbunden.',
                        outcomes: ['Fachübergreifende Teamarbeit', 'Agiles Projektmanagement', 'Rapid Prototyping', 'Kommunikation mit Stakeholdern', 'Führung und Koordination']
                    },
                    {
                        desc: 'Algorithmen und statistische Modelle, mit denen Computersysteme Aufgaben ohne explizite Anweisungen ausführen',
                        learned: 'Einführung in zentrale Konzepte, Algorithmen und Arbeitsabläufe des maschinellen Lernens. Ich habe verschiedene Modelle auf Datensätzen trainiert und bewertet, darunter ein Experiment, in dem ein SVM-Modell bei einer gestellten Aufgabe 100 % Genauigkeit erreichte.',
                        outcomes: ['Überwachtes Lernen', 'Datenaufbereitung', 'Aufteilung in Trainings-, Validierungs- und Testdaten', 'Modellbewertung', 'SVM', 'Bewusstsein für Overfitting', 'Vergleich anhand von Metriken']
                    },
                    {
                        desc: 'Strategien zur Identifizierung, Bewertung und Minderung von Informationssicherheitsrisiken in Organisationen',
                        learned: 'Der Fokus lag darauf, Informationssicherheitsrisiken zu erkennen, zu bewerten und zu steuern und technische Maßnahmen an den Geschäftsanforderungen auszurichten. Ich habe Rahmenwerke zur Risikobewertung, Sicherheitsrichtlinien und Minderungsstrategien studiert (angelehnt an Industriepraxis wie NIST).',
                        outcomes: ['Risikobewertung', 'Bedrohungs- und Schwachstellenanalyse', 'Sicherheitsmaßnahmen', 'Planung von Gegenmaßnahmen', 'Governance und Richtlinien', 'Compliance und Standards', 'Rahmenwerke im Stil von NIST']
                    },
                    {
                        desc: 'Ein Produkt mit Product-Market-Fit im jeweiligen Fachgebiet der Studierenden entwickeln',
                        learned: 'Produktorientiertes Modul, um die Passung von Problem und Lösung zu validieren und iterativ zum Product-Market-Fit in einer gewählten Domäne zu gelangen. Der Schwerpunkt lag auf Experimenten, Nutzerfeedback und schneller Iteration.',
                        outcomes: ['Customer Discovery', 'Marktvalidierung', 'MVP-Entwurf', 'Lean-Experimente', 'Pitching und Storytelling']
                    },
                    {
                        desc: 'Fortgeschrittene Konzepte der IoT-Architektur, Protokolle und Anwendungen für vernetzte Geräte',
                        learned: 'Behandelt wurden IoT-Systemarchitektur, Kommunikationsprotokolle und Geräteintegration. Ich habe Sensordatenerfassung, Gateway-Entwurf und sichere Cloud-Anbindung für vernetzte Lösungen erkundet.',
                        outcomes: ['IoT-Protokolle (MQTT/HTTP)', 'Sensorintegration', 'Grundlagen von Mikrocontrollern', 'Datenfluss Edge ↔ Cloud', 'Datenpipelines', 'Grundlagen der IoT-Sicherheit']
                    },
                    {
                        desc: 'Anwendung von KI-Techniken zur Lösung komplexer Rechen- und realer Probleme',
                        learned: 'Ich habe KI-Techniken wie heuristische Suche, Planung und wissensbasiertes Schlussfolgern auf Rechen- und reale Probleme angewendet. Der Schwerpunkt lag darauf, Probleme zu modellieren und passende Strategien zu wählen.',
                        outcomes: ['Heuristische Suche', 'Zustandsraummodellierung', 'Constraint Satisfaction', 'Regelbasiertes Schlussfolgern', 'Problemzerlegung']
                    },
                    {
                        desc: 'Techniken zur Erkennung von Schwachstellen, zur Analyse von Schadsoftware und zur Umsetzung sicherer Programmierpraktiken',
                        learned: 'Ich habe Prinzipien sicherer Programmierung und Ansätze zur Bewertung der Softwaresicherheit erkundet. Eingeführt wurden statische und dynamische Analyse sowie Grundlagen der Malware-Analyse und des Reverse Engineering.',
                        outcomes: ['Sichere Programmierung', 'Schwachstellenbewertung', 'Statische Analyse', 'Dynamische Analyse', 'Grundlagen des Reverse Engineering', 'Bedrohungsmodellierung']
                    }
                ]
            },
            {
                y: 'Jahr 4 · Abschlussjahr',
                courses: [
                    {status: 'In Arbeit'},
                    {status: 'In Arbeit'},
                    {status: 'In Arbeit'},
                    {status: 'In Arbeit'},
                    {status: 'In Arbeit'}
                ]
            }
        ],

        VENTURES: [
            {
                role: 'Entwickler',
                status: 'In Entwicklung',
                biz: {
                    problem: 'Trainer führen ihr Geschäft über verstreute Tools: Terminplanung an einem Ort, Fortschrittsnotizen an einem anderen, Nachrichten und Zahlungen wieder woanders.',
                    users: 'Personal Trainer und Online-Coaches. Gemeinsam mit Coaches in Aberdeen und Bratislava entwickelt. Entstanden aus einer Idee in meinem Trainer-Umfeld.',
                    decisions: [
                        'Als schlanke responsive Web-App starten, dann eine schnelle PC-App, dann iOS und Android.',
                        'Eine Bibliothek mit Übungsdemos einmal aufnehmen, damit Trainer professionelle Videos teilen, statt selbst zu filmen.',
                        'Zuerst auf dem eigenen Server hosten und testen: eine interne Alpha vor jeder Beta.'
                    ],
                    outcome: ['Privat mit Coaches geteilt, die es gerade testen']
                },
                build: {
                    contribution: 'Ich programmiere die Plattform und den Server, auf dem sie läuft: Terminplanung, Fortschrittsverfolgung, Trainingspläne, Nachrichten und Zahlungen.'
                },
                media: {alt: 'Bildschirmaufnahme des Elev8-Coaching-CRM'},
                links: [['Vollständige Fallstudie']]
            },
            {
                role: 'Leitete das technische Team',
                status: 'Prototyp geliefert',
                biz: {
                    problem: 'Ärzte brauchen Patientendaten, die sie schnell lesen und nutzen können, um bessere und schnellere Entscheidungen zu treffen.',
                    users: 'Ärzte, über einen Portal-Prototyp für ein HealthTech-Startup.',
                    decisions: ['Ich habe das Team auf der technischen Seite geleitet, während das Startup das Produkt formte.'],
                    outcome: ['Prototyp zum Testen übergeben; das Startup testet weiter und sucht Finanzierung']
                },
                build: {
                    contribution: 'Leitete ein Team, das die technische Seite des Ärzteportal-Prototyps baute.'
                },
                media: {alt: 'Ärzteportal-Prototyp für Ikarians HealthTech'}
            }
        ],

        STACK_LAYERS: [
            {name: 'Maschinencode und Theorie', build: 'Turingmaschinen, RAM-Maschinen und Automaten an der FIIT; ein Variationsgenerator, geschrieben als reiner Turingmaschinen-Code.'},
            {name: 'Hardware und Logik', build: 'Sequentielle Schaltungen in Logisim (FIIT); Mikrocontroller und Arduino (RGU).'},
            {name: 'C und Speicher', build: 'Meine eigene verkettete Liste und Array-Liste in C, RAM-Simulationen, Speicher von Hand verwaltet (FIIT).'},
            {name: 'Betriebssysteme', build: 'Prozesse, Virtualisierung, Speicherzuweisung, Betriebssystem-Skripting, Bash und Docker (RGU).'},
            {name: 'Nebenläufigkeit', build: 'Multithreading in Java an der FIIT und der RGU: parallele Ausführung und Synchronisation.'},
            {name: 'Sicherheit', build: 'Software Security and Malware Analysis; Information Risk and Security Management (RGU).'},
            {name: 'Daten', build: 'Microsoft SQL, Normalisierung und Abfrageoptimierung (RGU); MySQL, Supabase und Firebase in meinen Projekten.'},
            {name: 'Web und APIs', build: 'Node.js, REST-APIs und MongoDB (RGU); React; eine JavaFX-Desktop-App.'},
            {name: 'Cloud und Infrastruktur', build: 'AWS und mein eigener Server, auf dem die Elev8-Alpha läuft.'},
            {name: 'KI und maschinelles Lernen', build: 'Machine Learning und AI for Problem Solving (RGU); Natural Language Processing und Computer Vision im Abschlussjahr.'},
            {name: 'Produkt und Business', build: 'Pirates Studies (Product-Market-Fit), Creative Design (nutzerzentriert), Interdisciplinary Team Project und meine eigenen Ventures.'}
        ],

        SIDE_PROJECTS: [
            {
                name: 'Variations-Turingmaschine',
                desc: 'Ein Rätsel unter extremster Einschränkung: ein Variationsgenerator, der komplett als Turingmaschinen-Code geschrieben ist.',
                stack: ['Turingmaschinen-Code'],
                alt: 'Laufende Turingmaschine',
                link: ['Ausführen']
            },
            {
                name: 'Sequentielle Schaltung',
                desc: 'Wer weiß, wie eine Maschine von den Gattern aufwärts entscheidet, kann eine schwierige von einer einfachen Anforderung unterscheiden.',
                stack: ['Logisim', 'Digitale Logik']
            },
            {
                name: 'Datenstrukturen und RAM-Simulation in C',
                desc: 'Speicher kostet echte Zeit und echtes Geld. Das habe ich gelernt, indem ich ihn von Hand verwaltet habe.',
                stack: ['C', 'Verkettete Liste', 'Array-Liste', 'RAM-Simulation']
            },
            {
                name: 'Software zur Rechnungserstellung',
                desc: 'Ein Desktop-Tool für Freelancer: Kunden verwalten, Verlauf nachverfolgen und professionelle PDF-Rechnungen mit Cloud-Sync erzeugen.',
                alt: 'Demo der Rechnungssoftware'
            }
        ]
    }
};
