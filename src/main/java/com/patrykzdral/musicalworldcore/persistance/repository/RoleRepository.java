package com.patrykzdral.musicalworldcore.persistance.repository;

import com.patrykzdral.musicalworldcore.persistance.entity.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
    Role findByName(String name);
}
