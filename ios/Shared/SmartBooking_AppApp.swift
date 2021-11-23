//
//  SmartBooking_AppApp.swift
//  Shared
//
//  Created by BEK ROZIKOFF on 22/11/21.
//

import SwiftUI

@main
struct SmartBooking_AppApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
